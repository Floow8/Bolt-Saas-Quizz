"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Edit, Eye, Trash2 } from "lucide-react"

const exams = [
  {
    id: 1,
    name: "Final Mathematics Exam",
    status: "Published",
    duration: "120 mins",
    questions: 45,
    startDate: "2024-04-01",
  },
  {
    id: 2,
    name: "Physics Mid-term",
    status: "Draft",
    duration: "90 mins",
    questions: 30,
    startDate: "2024-04-15",
  },
  // Add more sample exams...
]

export function ExamList() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Duration</TableHead>
          <TableHead>Questions</TableHead>
          <TableHead>Start Date</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {exams.map((exam) => (
          <TableRow key={exam.id}>
            <TableCell className="font-medium">{exam.name}</TableCell>
            <TableCell>
              <Badge variant={exam.status === "Published" ? "default" : "secondary"}>
                {exam.status}
              </Badge>
            </TableCell>
            <TableCell>{exam.duration}</TableCell>
            <TableCell>{exam.questions}</TableCell>
            <TableCell>{exam.startDate}</TableCell>
            <TableCell className="space-x-2">
              <Button variant="ghost" size="icon">
                <Eye className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Edit className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Trash2 className="h-4 w-4" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}