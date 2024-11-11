"use client";

import { Button } from "@/components/ui/button";
import { useBacktestStore } from "@/stores/backtest/backtest-store";

export function SetInitial() {
  const { initial, setInitial, initialInput } = useBacktestStore();

  return (
    <Button
      disabled={!!initial}
      variant="secondary"
      onClick={() => setInitial(initialInput)}
    >
      Set Initial
    </Button>
  );
}
