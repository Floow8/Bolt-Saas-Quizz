import Link from "next/link"
import { 
  BookOpen, 
  FileText, 
  Key, 
  BarChart2, 
  Settings,
  Users,
  Calendar
} from "lucide-react"

const navigation = [
  { name: "Question Banks", href: "/dashboard/questions", icon: BookOpen },
  { name: "Exams", href: "/dashboard/exams", icon: FileText },
  { name: "Access Tokens", href: "/dashboard/tokens", icon: Key },
  { name: "Results", href: "/dashboard/results", icon: BarChart2 },
  { name: "Students", href: "/dashboard/students", icon: Users },
  { name: "Schedule", href: "/dashboard/schedule", icon: Calendar },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
]

export function DashboardNav() {
  return (
    <nav className="w-64 min-h-screen bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800">
      <div className="p-4 space-y-4">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:text-blue-400 dark:hover:bg-gray-800"
          >
            <item.icon className="h-5 w-5" />
            <span>{item.name}</span>
          </Link>
        ))}
      </div>
    </nav>
  )
}