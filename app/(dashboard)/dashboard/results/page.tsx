import { ResultsList } from "@/components/results/results-list"
import { ResultsChart } from "@/components/results/results-chart"
import { ResultsFilters } from "@/components/results/results-filters"

export default function ResultsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Results & Analytics</h2>
        <p className="text-muted-foreground">View and analyze exam results</p>
      </div>
      <ResultsChart />
      <ResultsFilters />
      <ResultsList />
    </div>
  )
}