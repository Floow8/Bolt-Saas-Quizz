"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye, Download } from "lucide-react"

const results = [
  {
    id: 1,
    student: "John Smith",
    exam: "Final Mathematics Exam",
    score: 85,
    grade: "A",
    completedAt: "2024-03-20",
    duration: "118 mins",
  },
  {
    id: 2,
    student: "Emma Wilson",
    exam: "Physics Mid-term",
    score: 78,
    grade: "B",
    completedAt: "2024-03-19",
    duration: "85 mins",
  },
  // Add more sample results for demonstration
]

export function ResultsList() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Student</TableHead>
          <TableHead>Exam</TableHead>
          <TableHead>Score</TableHead>
          <TableHead>Grade</TableHead>
          <TableHead>Completed</TableHead>
          <TableHead>Duration</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {results.map((result) => (
          <TableRow key={result.id}>
            <TableCell className="font-medium">{result.student}</TableCell>
            <TableCell>{result.exam}</TableCell>
            <TableCell>{result.score}%</TableCell>
            <TableCell>
              <Badge variant={
                result.grade === "A" ? "default" :
                result.grade === "B" ? "secondary" :
                "outline"
              }>
                {result.grade}
              </Badge>
            </TableCell>
            <TableCell>{result.completedAt}</TableCell>
            <TableCell>{result.duration}</TableCell>
            <TableCell className="space-x-2">
              <Button variant="ghost" size="icon">
                <Eye className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Download className="h-4 w-4" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}