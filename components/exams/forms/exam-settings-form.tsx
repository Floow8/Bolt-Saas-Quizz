"use client"

import { Control } from "react-hook-form"
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { CategoryDistribution } from "./category-distribution"

interface ExamSettingsFormProps {
  control: Control<any>
}

export function ExamSettingsForm({ control }: ExamSettingsFormProps) {
  return (
    <div className="space-y-6">
      <FormField
        control={control}
        name="settings.timeLimit"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Time Limit (minutes)</FormLabel>
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

      <FormField
        control={control}
        name="settings.passingScore"
        render={({ field }) => (
          <FormItem>
            <div className="flex justify-between">
              <FormLabel>Passing Score</FormLabel>
              <span className="text-sm text-muted-foreground">{field.value}%</span>
            </div>
            <FormControl>
              <div className="pt-2">
                <Slider
                  min={0}
                  max={100}
                  step={1}
                  value={[field.value]}
                  onValueChange={([value]) => field.onChange(value)}
                  className="w-full"
                />
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="settings.randomizeQuestions"
        render={({ field }) => (
          <FormItem className="flex items-center justify-between">
            <FormLabel>Randomize Questions</FormLabel>
            <FormControl>
              <Switch
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="settings.totalQuestions"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Number of Questions</FormLabel>
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

      <CategoryDistribution control={control} />
    </div>
  )
}