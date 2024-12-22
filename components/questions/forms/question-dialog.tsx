"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { QuestionForm } from "./question-form"
import { Question, QuestionFormData } from "../types/question-types"
import { toast } from "sonner"

interface QuestionDialogProps {
  trigger: React.ReactNode
  question?: Question
}

export function QuestionDialog({ trigger, question }: QuestionDialogProps) {
  const [open, setOpen] = useState(false)

  const handleSubmit = (data: QuestionFormData) => {
    // Here you would typically save the question to your backend
    console.log(data)
    toast.success(question ? "Question updated successfully" : "Question created successfully")
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh]">
        <DialogHeader>
          <DialogTitle>{question ? "Edit Question" : "Add New Question"}</DialogTitle>
        </DialogHeader>
        <ScrollArea className="max-h-[calc(90vh-8rem)] pr-4">
          <QuestionForm 
            defaultValues={question}
            onSubmit={handleSubmit}
          />
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}