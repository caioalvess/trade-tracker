"use client";

import { Input } from "@/components/ui/input";
import { useBacktestStore } from "@/stores/backtest/backtest-store";

export function Loss() {
  const { lossInput, setLossInput } = useBacktestStore();

  return (
    <Input
      type="number"
      value={lossInput}
      onChange={(e) => setLossInput(Number(e.target.value))}
    />
  );
}
