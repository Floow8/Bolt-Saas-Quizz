"use client"

import { Control, UseFormRegister, useFieldArray } from "react-hook-form"
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Plus, Trash2 } from "lucide-react"
import { QuestionFormData } from "../types/question-types"

interface MultipleChoiceOptionsProps {
  control: Control<QuestionFormData>
  register: UseFormRegister<QuestionFormData>
}

export function MultipleChoiceOptions({ control, register }: MultipleChoiceOptionsProps) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "options",
  })

  return (
    <div className="space-y-4">
      <div className="space-y-4">
        {fields.map((field, index) => (
          <div key={field.id} className="flex items-start gap-4">
            <FormField
              control={control}
              name={`correctAnswers.${index}`}
              render={({ field: switchField }) => (
                <FormItem className="flex items-center space-x-2 pt-2">
                  <FormControl>
                    <Switch
                      checked={switchField.value}
                      onCheckedChange={switchField.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            
            <FormField
              control={control}
              name={`options.${index}`}
              render={({ field }) => (
                <FormItem className="flex-1">
                  <div className="flex items-center gap-2">
                    <FormLabel className="w-24 pt-2">Option {String.fromCharCode(65 + index)}</FormLabel>
                    <FormControl>
                      <div className="flex gap-2 flex-1">
                        <Input {...field} placeholder={`Enter option ${String.fromCharCode(65 + index)}`} />
                        {index > 1 && (
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            onClick={() => remove(index)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    </FormControl>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        ))}
      </div>

      {fields.length < 6 && (
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => append("")}
          className="w-full"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Option
        </Button>
      )}
    </div>
  )
}