"use client";

import { Button } from "@/components/ui/button";
import { useBacktestStore } from "@/stores/backtest/backtest-store";
import { Minus } from "lucide-react";

export function AddLoss() {
  const { initial } = useBacktestStore();

  return (
    <Button disabled={!initial} variant="destructive">
      <Minus /> Add Loss
    </Button>
  );
}
