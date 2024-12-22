"use client"

import { useEffect, useState } from 'react'
import { getQuestions } from '@/lib/questions'

export interface Question {
  id: string
  question: string
  type: string
  category: string
  points: number
  options: string[]
  correct_answers: number[]
}

export function useQuestions() {
  const [questions, setQuestions] = useState<Question[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchQuestions() {
      try {
        const data = await getQuestions()
        setQuestions(data)
      } catch (err) {
        setError('Failed to fetch questions')
      } finally {
        setLoading(false)
      }
    }

    fetchQuestions()
  }, [])

  return { questions, loading, error }
}