import { Calendar } from "@/components/ui/calendar"
import { Card } from "@/components/ui/card"
import { UpcomingExams } from "@/components/schedule/upcoming-exams"

export default function SchedulePage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Schedule</h2>
        <p className="text-muted-foreground">Manage exam schedules and sessions</p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-6">
          <Calendar />
        </Card>
        <UpcomingExams />
      </div>
    </div>
  )
}