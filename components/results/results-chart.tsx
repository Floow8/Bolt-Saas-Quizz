"use client"

import { Card } from "@/components/ui/card"
import { Bar, BarChart, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { grade: "A", count: 20 },
  { grade: "B", count: 35 },
  { grade: "C", count: 25 },
  { grade: "D", count: 15 },
  { grade: "F", count: 5 },
]

export function ResultsChart() {
  return (
    <Card className="p-6">
      <h3 className="font-semibold mb-4">Grade Distribution</h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="grade" />
            <YAxis />
            <Tooltip />
            <Bar 
              dataKey="count" 
              fill="hsl(var(--chart-1))"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}