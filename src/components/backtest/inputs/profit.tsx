"use client";

import { Input } from "@/components/ui/input";
import { useBacktestStore } from "@/stores/backtest/backtest-store";

export function Profit() {
  const { profitInput, setProfitInput } = useBacktestStore();

  return (
    <Input
      type="number"
      value={profitInput}
      onChange={(e) => setProfitInput(Number(e.target.value))}
    />
  );
}
