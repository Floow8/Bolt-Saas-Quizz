"use client"

import { Badge } from "@/components/ui/badge"

type QuestionType = "Multiple Choice" | "True/False" | "Essay" | "Short Answer"

interface QuestionTypeBadgeProps {
  type: QuestionType
}

export function QuestionTypeBadge({ type }: QuestionTypeBadgeProps) {
  const variant = {
    "Multiple Choice": "default",
    "True/False": "secondary",
    "Essay": "outline",
    "Short Answer": "outline"
  }[type] as const

  return <Badge variant={variant}>{type}</Badge>
}