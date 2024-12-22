export type QuestionType = "Multiple Choice" | "True/False" | "Essay" | "Short Answer"

export interface Question {
  id: number
  question: string
  type: QuestionType
  category: string
  lastModified: string
  options?: string[]
  correctAnswers?: number[]
  points?: number
}

export interface QuestionFormData {
  question: string
  type: QuestionType
  category: string
  options?: string[]
  correctAnswers: number[]
  points: number
}