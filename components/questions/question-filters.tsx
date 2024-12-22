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
import { Upload, Download } from "lucide-react"

export function QuestionFilters() {
  return (
    <div className="flex flex-wrap gap-4 items-center">
      <Input
        placeholder="Search questions..."
        className="max-w-sm"
      />
      <Select defaultValue="all">
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Question Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Types</SelectItem>
          <SelectItem value="multiple">Multiple Choice</SelectItem>
          <SelectItem value="true-false">True/False</SelectItem>
          <SelectItem value="essay">Essay</SelectItem>
          <SelectItem value="short">Short Answer</SelectItem>
        </SelectContent>
      </Select>
      <Select defaultValue="all">
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Categories</SelectItem>
          <SelectItem value="math">Mathematics</SelectItem>
          <SelectItem value="science">Science</SelectItem>
          <SelectItem value="english">English</SelectItem>
          <SelectItem value="history">History</SelectItem>
        </SelectContent>
      </Select>
      <div className="flex gap-2">
        <Button variant="outline" size="icon">
          <Upload className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon">
          <Download className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}