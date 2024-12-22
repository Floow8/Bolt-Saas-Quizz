import { QuestionList } from "@/components/questions/question-list"
import { QuestionFilters } from "@/components/questions/question-filters"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { QuestionDialog } from "@/components/questions/forms/question-dialog"

export default function QuestionsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Question Banks</h2>
          <p className="text-muted-foreground">Manage your question repository</p>
        </div>
        <QuestionDialog
          trigger={
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Question
            </Button>
          }
        />
      </div>
      <QuestionFilters />
      <QuestionList />
    </div>
  )
}