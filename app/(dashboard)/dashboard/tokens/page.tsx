import { TokenList } from "@/components/tokens/token-list"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export default function TokensPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Access Tokens</h2>
          <p className="text-muted-foreground">Generate and manage exam access tokens</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Generate Tokens
        </Button>
      </div>
      <TokenList />
    </div>
  )
}