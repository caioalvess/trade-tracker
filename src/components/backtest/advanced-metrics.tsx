import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function AdvancedMetrics() {
  return (
    <Card className="w-full min-w-96 h-full bg-zinc-900 text-white border-zinc-800">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-md font-medium">Profitability</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <div className="text-md text-zinc-400">Profit Factor</div>
            <div className="text-md font-medium text-emerald-400">1.5</div>
          </div>
          <div className="space-y-1">
            <div className="text-md text-zinc-400">Edge Score</div>
            <div className="text-md font-medium text-emerald-400">71.67</div>
          </div>
        </div>

        <div className="space-y-4">
          <CardTitle className="text-md font-medium">Risk</CardTitle>

          <div className="space-y-1">
            <div className="text-md text-zinc-400">Largest:</div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <div className="text-xs text-zinc-400">Profit Trade</div>
                <div className="text-md font-medium text-emerald-400">3%</div>
              </div>
              <div className="space-y-1">
                <div className="text-xs text-zinc-400">Loss Trade</div>
                <div className="text-md font-medium text-emerald-400">2%</div>
              </div>
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-md text-zinc-400">Max:</div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <div className="text-xs text-zinc-400">Consec. Wins</div>
                <div className="text-md font-medium text-emerald-400">1</div>
              </div>
              <div className="space-y-1">
                <div className="text-xs text-zinc-400">Consec. Loss</div>
                <div className="text-md font-medium text-emerald-400">2</div>
              </div>
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-md text-zinc-400">Average:</div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <div className="text-xs text-zinc-400">Win</div>
                <div className="text-md font-medium text-emerald-400">3%</div>
              </div>
              <div className="space-y-1">
                <div className="text-xs text-zinc-400">Loss</div>
                <div className="text-md font-medium text-emerald-400">2%</div>
              </div>
              <div className="space-y-1">
                <div className="text-xs text-zinc-400">Max Drawdown</div>
                <div className="text-md font-medium text-emerald-400">
                  3.96%
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-xs text-zinc-400">Reward : Risk</div>
                <div className="text-md font-medium text-emerald-400">
                  1.5:1
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
