import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart2, Users, FileText, Award } from "lucide-react"

const stats = [
  {
    name: "Total Exams",
    value: "245",
    icon: FileText,
    change: "+4.75%",
    changeType: "positive"
  },
  {
    name: "Active Students",
    value: "2,300",
    icon: Users,
    change: "+10.2%",
    changeType: "positive"
  },
  {
    name: "Completion Rate",
    value: "88.5%",
    icon: Award,
    change: "+2.4%",
    changeType: "positive"
  },
  {
    name: "Avg. Score",
    value: "75.2%",
    icon: BarChart2,
    change: "-0.5%",
    changeType: "negative"
  },
]

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Overview</h2>
        <p className="text-muted-foreground">Welcome back! Here's what's happening.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.name}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.name}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className={`text-xs ${
                stat.changeType === "positive" 
                  ? "text-green-600 dark:text-green-400"
                  : "text-red-600 dark:text-red-400"
              }`}>
                {stat.change} from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}