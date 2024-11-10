"use client";

import { Button } from "@/components/ui/button";
import { useBacktestStore } from "@/stores/backtest/backtest-store";

export function SetInitial() {
  const { initial } = useBacktestStore();

  return (
    <Button disabled={!!initial} variant="secondary">
      Set Initial
    </Button>
  );
}
