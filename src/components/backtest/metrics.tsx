export function Metrics() {
  return (
    <div className="w-full bg-zinc-900 p-4 rounded-lg">
      <div className="grid grid-cols-4 gap-4">
        <div className="space-y-1">
          <div className="text-sm text-zinc-400">Winrate</div>
          <div className="text-lg font-medium text-white">0%</div>
        </div>

        <div className="space-y-1">
          <div className="text-sm text-zinc-400">PnL</div>
          <div className="flex flex-col items-start gap-1">
            <span className="text-red-500 text-sm">↓ 0%</span>
            <span className="text-lg font-medium text-white">$0.00</span>
          </div>
        </div>

        <div className="space-y-1">
          <div className="text-sm text-zinc-400">Total Trades</div>
          <div className="text-lg font-medium text-red-500">0</div>
        </div>

        <div className="space-y-1">
          <div className="text-sm text-zinc-400">Wins / Losses</div>
          <div className="text-lg font-medium text-white">0W / 0L</div>
        </div>
      </div>
    </div>
  );
}
