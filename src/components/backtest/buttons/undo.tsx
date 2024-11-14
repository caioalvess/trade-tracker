"use client";

import { Button } from "@/components/ui/button";
import { useBacktestStore } from "@/stores/backtest/backtest-store";
import { RotateCcw } from "lucide-react";

export function Undo() {
  const { trades, undo } = useBacktestStore();

  return (
    <Button disabled={!trades.length} className="w-full" onClick={undo}>
      <RotateCcw /> Undo
    </Button>
  );
}
