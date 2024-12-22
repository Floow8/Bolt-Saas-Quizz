import { StudentList } from "@/components/students/student-list"
import { StudentFilters } from "@/components/students/student-filters"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export default function StudentsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Students</h2>
          <p className="text-muted-foreground">Manage student accounts and permissions</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Student
        </Button>
      </div>
      <StudentFilters />
      <StudentList />
    </div>
  )
}