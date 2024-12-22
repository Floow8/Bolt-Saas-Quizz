export interface ExamSettings {
  timeLimit: number; // in minutes
  passingScore: number; // percentage
  randomizeQuestions: boolean;
  totalQuestions: number;
  categoryDistribution: {
    categoryId: string;
    percentage: number;
  }[];
}

export interface ExamQuestion {
  id: number;
  question: string;
  type: string;
  category: string;
  points: number;
}

export interface Exam {
  id: string;
  title: string;
  description: string;
  settings: ExamSettings;
  questions: ExamQuestion[];
  status: "draft" | "published" | "archived";
  createdAt: string;
  updatedAt: string;
}