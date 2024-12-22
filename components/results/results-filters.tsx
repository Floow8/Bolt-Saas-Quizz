"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { DatePicker } from "@/components/ui/date-picker"

export function ResultsFilters() {
  return (
    <div className="flex flex-wrap gap-4 items-center">
      <Input
        placeholder="Search results..."
        className="max-w-sm"
      />
      <Select defaultValue="all">
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Exam Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Exams</SelectItem>
          <SelectItem value="final">Final Exams</SelectItem>
          <SelectItem value="midterm">Midterms</SelectItem>
          <SelectItem value="quiz">Quizzes</SelectItem>
        </SelectContent>
      </Select>
      <DatePicker />
      <Button variant="outline">
        Export Results
      </Button>
    </div>
  )
}