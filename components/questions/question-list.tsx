"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { QuestionTypeBadge } from "./types/question-type-badge"
import { QuestionActions } from "./question-actions"
import { useState } from "react"
import { toast } from "sonner"

interface Question {
  id: number
  question: string
  type: "Multiple Choice" | "True/False" | "Essay" | "Short Answer"
  category: string
  lastModified: string
}

const questions: Question[] = [
  {
    id: 1,
    question: "What is the capital of France?",
    type: "Multiple Choice",
    category: "Geography",
    lastModified: "2024-03-20",
  },
  {
    id: 2,
    question: "The Earth revolves around the Sun.",
    type: "True/False",
    category: "Science",
    lastModified: "2024-03-19",
  },
  {
    id: 3,
    question: "Explain the process of photosynthesis.",
    type: "Essay",
    category: "Biology",
    lastModified: "2024-03-18",
  },
  {
    id: 4,
    question: "Define Newton's First Law of Motion.",
    type: "Short Answer",
    category: "Physics",
    lastModified: "2024-03-17",
  },
]

export function QuestionList() {
  const [questionsList, setQuestionsList] = useState<Question[]>(questions)

  const handleEdit = (id: number) => {
    toast.success("Editing question")
    // Implement edit functionality
  }

  const handleDelete = (id: number) => {
    setQuestionsList(questionsList.filter(q => q.id !== id))
    toast.success("Question deleted successfully")
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Question</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Last Modified</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {questionsList.map((question) => (
          <TableRow key={question.id}>
            <TableCell className="font-medium max-w-md truncate">
              {question.question}
            </TableCell>
            <TableCell>
              <QuestionTypeBadge type={question.type} />
            </TableCell>
            <TableCell>{question.category}</TableCell>
            <TableCell>{question.lastModified}</TableCell>
            <TableCell>
              <QuestionActions
                questionId={question.id}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}