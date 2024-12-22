"use client"

import { Control, useFieldArray } from "react-hook-form"
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Plus, Trash2 } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface CategoryDistributionProps {
  control: Control<any>
}

const categories = [
  { id: "math", name: "Mathematics" },
  { id: "science", name: "Science" },
  { id: "english", name: "English" },
  { id: "history", name: "History" },
]

export function CategoryDistribution({ control }: CategoryDistributionProps) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "settings.categoryDistribution"
  })

  const totalPercentage = fields.reduce((sum, field: any) => sum + (field.percentage || 0), 0)

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <FormLabel>Category Distribution</FormLabel>
        <span className={`text-sm ${totalPercentage > 100 ? 'text-red-500' : 'text-muted-foreground'}`}>
          Total: {totalPercentage}%
        </span>
      </div>

      <div className="space-y-4">
        {fields.map((field, index) => (
          <div key={field.id} className="flex gap-4">
            <FormField
              control={control}
              name={`settings.categoryDistribution.${index}.categoryId`}
              render={({ field }) => (
                <FormItem className="flex-1">
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {categories.map(category => (
                        <SelectItem key={category.id} value={category.id}>
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name={`settings.categoryDistribution.${index}.percentage`}
              render={({ field }) => (
                <FormItem className="w-24">
                  <FormControl>
                    <Input
                      type="number"
                      {...field}
                      onChange={e => field.onChange(parseInt(e.target.value))}
                      placeholder="%"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={() => remove(index)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>

      <Button
        type="button"
        variant="outline"
        size="sm"
        onClick={() => append({ categoryId: "", percentage: 0 })}
        className="w-full"
      >
        <Plus className="h-4 w-4 mr-2" />
        Add Category
      </Button>
    </div>
  )
}