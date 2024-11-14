"use client";

import { Button } from "@/components/ui/button";
import { useBacktestStore } from "@/stores/backtest/backtest-store";
import { Plus } from "lucide-react";

export function AddProfit() {
  const { initial, addTrade, profitInput, lossInput } = useBacktestStore();

  return (
    <Button
      disabled={!initial}
      className="bg-positive"
      variant="positive"
      onClick={() => addTrade(profitInput, "profit", profitInput, lossInput)}
    >
      <Plus /> Add Profit
    </Button>
  );
}
