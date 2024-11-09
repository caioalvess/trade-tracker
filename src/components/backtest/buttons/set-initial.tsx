"use client";

import { Button } from "@/components/ui/button";
import { useBacktestStore } from "@/stores/backtest/backtest-store";

export function SetInitial() {
  const { test } = useBacktestStore();

  return <Button variant="secondary">Set Initial {test}</Button>;
}
