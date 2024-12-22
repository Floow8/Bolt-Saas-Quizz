"use client"

import { ExamForm } from "@/components/exams/forms/exam-form"

export default function NewExamPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Create New Exam</h2>
        <p className="text-muted-foreground">Configure your exam settings and add questions</p>
      </div>
      
      <div className="border rounded-lg p-6 bg-white dark:bg-gray-900">
        <ExamForm />
      </div>
    </div>
  )
}