"use client";

import { Input } from "@/components/ui/input";
import { useBacktestStore } from "@/stores/backtest/backtest-store";

export function Initial() {
  const { initial, initialInput, setInitialInput } = useBacktestStore();

  return (
    <Input
      className="bg-white"
      disabled={!!initial}
      type="number"
      value={initialInput}
      onChange={(e) => setInitialInput(Number(e.target.value))}
    />
  );
}
