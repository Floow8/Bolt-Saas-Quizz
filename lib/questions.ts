import { supabase } from './db'

export async function getQuestions() {
  const { data: questions, error } = await supabase
    .from('questions')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    throw new Error('Failed to fetch questions')
  }

  return questions
}

export async function getQuestionsByCategory(category: string) {
  const { data: questions, error } = await supabase
    .from('questions')
    .select('*')
    .eq('category', category)
    .order('created_at', { ascending: false })

  if (error) {
    throw new Error('Failed to fetch questions')
  }

  return questions
}