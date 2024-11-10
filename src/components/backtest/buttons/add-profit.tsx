"use client";

import { Button } from "@/components/ui/button";
import { useBacktestStore } from "@/stores/backtest/backtest-store";
import { Plus } from "lucide-react";

export function AddProfit() {
  const { initial } = useBacktestStore();

  return (
    <Button disabled={!initial} className="bg-positive" variant="positive">
      <Plus /> Add Profit
    </Button>
  );
}
