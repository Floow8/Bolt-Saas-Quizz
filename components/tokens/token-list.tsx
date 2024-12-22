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
import { Copy, Trash2 } from "lucide-react"
import { toast } from "sonner"

const tokens = [
  {
    id: 1,
    token: "EXAM-2024-ABCD-1234",
    exam: "Final Mathematics Exam",
    status: "Active",
    validUntil: "2024-04-01",
    usageCount: "0/1",
  },
  {
    id: 2,
    token: "EXAM-2024-EFGH-5678",
    exam: "Physics Mid-term",
    status: "Used",
    validUntil: "2024-03-15",
    usageCount: "1/1",
  },
  // Add more sample tokens...
]

export function TokenList() {
  const copyToken = (token: string) => {
    navigator.clipboard.writeText(token)
    toast.success("Token copied to clipboard")
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Token</TableHead>
          <TableHead>Exam</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Valid Until</TableHead>
          <TableHead>Usage</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tokens.map((token) => (
          <TableRow key={token.id}>
            <TableCell className="font-mono">{token.token}</TableCell>
            <TableCell>{token.exam}</TableCell>
            <TableCell>
              <Badge variant={token.status === "Active" ? "default" : "secondary"}>
                {token.status}
              </Badge>
            </TableCell>
            <TableCell>{token.validUntil}</TableCell>
            <TableCell>{token.usageCount}</TableCell>
            <TableCell className="space-x-2">
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => copyToken(token.token)}
              >
                <Copy className="h-4 w-4" />
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