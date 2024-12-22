"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
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
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExamSettingsForm } from "./exam-settings-form"
import { QuestionSelection } from "./question-selection"
import { toast } from "sonner"

const examSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string(),
  settings: z.object({
    timeLimit: z.number().min(1, "Time limit must be at least 1 minute"),
    passingScore: z.number().min(0).max(100, "Passing score must be between 0 and 100"),
    randomizeQuestions: z.boolean(),
    totalQuestions: z.number().min(1, "Must have at least 1 question"),
    categoryDistribution: z.array(z.object({
      categoryId: z.string(),
      percentage: z.number().min(0).max(100)
    }))
  }),
  questions: z.array(z.string())
})

type ExamFormData = z.infer<typeof examSchema>

export function ExamForm() {
  const router = useRouter()
  const [selectedQuestions, setSelectedQuestions] = useState<string[]>([])

  const form = useForm<ExamFormData>({
    resolver: zodResolver(examSchema),
    defaultValues: {
      title: "",
      description: "",
      settings: {
        timeLimit: 60,
        passingScore: 70,
        randomizeQuestions: false,
        totalQuestions: 10,
        categoryDistribution: []
      },
      questions: []
    }
  })

  const onSubmit = async (data: ExamFormData) => {
    try {
      // Add selected questions to the form data
      data.questions = selectedQuestions

      // Validate category distribution total
      const totalPercentage = data.settings.categoryDistribution.reduce(
        (sum, cat) => sum + cat.percentage, 
        0
      )
      
      if (totalPercentage !== 100) {
        toast.error("Category distribution must total 100%")
        return
      }

      if (selectedQuestions.length < data.settings.totalQuestions) {
        toast.error("Not enough questions selected")
        return
      }

      // Here you would typically save the exam data
      console.log("Submitting exam:", data)
      
      toast.success("Exam created successfully")
      router.push("/dashboard/exams")
    } catch (error) {
      toast.error("Failed to create exam")
      console.error(error)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <Tabs defaultValue="basic" className="w-full">
          <TabsList>
            <TabsTrigger value="basic">Basic Information</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
            <TabsTrigger value="questions">Questions</TabsTrigger>
          </TabsList>

          <TabsContent value="basic" className="space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter exam title" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea {...field} placeholder="Enter exam description" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </TabsContent>

          <TabsContent value="settings">
            <ExamSettingsForm control={form.control} />
          </TabsContent>

          <TabsContent value="questions">
            <QuestionSelection
              selectedQuestions={selectedQuestions}
              onSelectionChange={setSelectedQuestions}
            />
          </TabsContent>
        </Tabs>

        <div className="flex justify-end space-x-2">
          <Button 
            type="button" 
            variant="outline" 
            onClick={() => router.push("/dashboard/exams")}
          >
            Cancel
          </Button>
          <Button type="submit">Create Exam</Button>
        </div>
      </form>
    </Form>
  )
}