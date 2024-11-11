"use client";

import { cn } from "@/lib/utils";
import { useBacktestStore } from "@/stores/backtest/backtest-store";

export function Metrics() {
  const { trades, initial } = useBacktestStore();

  return (
    <div className="w-full bg-zinc-900 p-4 rounded-lg">
      <div className="grid grid-cols-5 gap-4">
        <div className="space-y-1">
          <div className="text-sm text-zinc-400">Winrate</div>
          <div className="text-lg font-medium text-white">
            {trades[trades.length - 1]?.winrate.toFixed(1) || 0}%
          </div>
        </div>

        <div className="space-y-1">
          <div className="text-sm text-zinc-400">PnL</div>
          <div className="flex flex-col items-start gap-1">
            <span className="text-red-500 text-sm">
              {trades[trades.length - 1]?.pnl.percentage.toFixed(2) || 0}%
            </span>
            <span className="text-lg font-medium text-white">
              {trades[trades.length - 1]?.pnl.value.toFixed(2) || "0.00"}
            </span>
          </div>
        </div>

        <div className="space-y-1">
          <div className="text-sm text-zinc-400">Funds</div>
          <div
            className={cn(
              "text-lg font-medium text-white",
              trades.length &&
                trades[trades.length - 1]?.currentUpdatedInitial > initial &&
                "text-positive",
              trades.length &&
                trades[trades.length - 1]?.currentUpdatedInitial < initial &&
                "text-destructive"
            )}
          >
            {trades[trades.length - 1]?.currentUpdatedInitial.toFixed(2) ||
              initial.toFixed(2) ||
              "0.00"}
          </div>
        </div>

        <div className="space-y-1">
          <div className="text-sm text-zinc-400">Total Trades</div>
          <div className="text-lg font-medium text-white">
            {trades[trades.length - 1]?.totalTrades || 0}
          </div>
        </div>

        <div className="space-y-1">
          <div className="text-sm text-zinc-400">Wins / Losses</div>
          <div className="text-lg font-medium text-white">
            {trades[trades.length - 1]?.winsAndLosses.wins || 0}W /
            {trades[trades.length - 1]?.winsAndLosses.losses || 0}L
          </div>
        </div>
      </div>
    </div>
  );
}
