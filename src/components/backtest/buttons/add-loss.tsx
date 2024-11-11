"use client";

import { Button } from "@/components/ui/button";
import { useBacktestStore } from "@/stores/backtest/backtest-store";
import { Minus } from "lucide-react";

export function AddLoss() {
  const { initial, addTrade, lossInput } = useBacktestStore();

  return (
    <Button
      disabled={!initial}
      variant="destructive"
      onClick={() => addTrade(lossInput, "loss")}
    >
      <Minus /> Add Loss
    </Button>
  );
}
