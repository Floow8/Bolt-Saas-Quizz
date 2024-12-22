"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Question, QuestionFormData } from "../types/question-types"
import { MultipleChoiceOptions } from "./multiple-choice-options"

const questionSchema = z.object({
  question: z.string().min(1, "Question is required"),
  type: z.enum(["Multiple Choice", "True/False", "Essay", "Short Answer"]),
  category: z.string().min(1, "Category is required"),
  options: z.array(z.string()).min(2, "At least 2 options are required"),
  correctAnswers: z.array(z.boolean()).min(2, "At least one correct answer is required"),
  points: z.number().min(1, "Points must be at least 1"),
})

interface QuestionFormProps {
  defaultValues?: Question
  onSubmit: (data: QuestionFormData) => void
}

export function QuestionForm({ defaultValues, onSubmit }: QuestionFormProps) {
  const form = useForm<QuestionFormData>({
    resolver: zodResolver(questionSchema),
    defaultValues: defaultValues || {
      question: "",
      type: "Multiple Choice",
      category: "",
      options: ["", ""],
      correctAnswers: [false, false],
      points: 1,
    },
  })

  const handleSubmit = (data: QuestionFormData) => {
    // Convert boolean array to array of indices for correct answers
    const correctAnswers = data.correctAnswers
      .map((isCorrect, index) => isCorrect ? index : -1)
      .filter(index => index !== -1)
    
    onSubmit({
      ...data,
      correctAnswers,
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="question"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Question</FormLabel>
              <FormControl>
                <Textarea {...field} placeholder="Enter your question" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Type</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select question type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Multiple Choice">Multiple Choice</SelectItem>
                    <SelectItem value="True/False">True/False</SelectItem>
                    <SelectItem value="Essay">Essay</SelectItem>
                    <SelectItem value="Short Answer">Short Answer</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Mathematics">Mathematics</SelectItem>
                    <SelectItem value="Science">Science</SelectItem>
                    <SelectItem value="English">English</SelectItem>
                    <SelectItem value="History">History</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {form.watch("type") === "Multiple Choice" && (
          <MultipleChoiceOptions 
            control={form.control} 
            register={form.register}
          />
        )}

        <FormField
          control={form.control}
          name="points"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Points</FormLabel>
              <FormControl>
                <Input 
                  type="number" 
                  {...field} 
                  onChange={e => field.onChange(parseInt(e.target.value))}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-end space-x-2">
          <Button type="submit">
            {defaultValues ? "Update Question" : "Add Question"}
          </Button>
        </div>
      </form>
    </Form>
  )
}