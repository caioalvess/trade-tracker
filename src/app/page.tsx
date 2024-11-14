import { AdvancedMetrics } from "@/components/backtest/advanced-metrics";
import { Chart } from "@/components/backtest/chart";
import { Metrics } from "@/components/backtest/metrics";
import { TradeControl } from "@/components/backtest/trade-control";
import { TradeOptions } from "@/components/backtest/trade-options";

export default function Component() {
  return (
    <div className="w-full flex flex-col gap-4 h-screen p-4">
      <div className="w-full flex gap-4">
        <div className="min-h-fit">
          <TradeOptions />
        </div>
        <div>
          <TradeControl />
        </div>
        <div className="flex-1">
          <Metrics />
        </div>
      </div>

      <div className="w-full flex flex-1 gap-4">
        <Chart />
        <AdvancedMetrics />
      </div>
    </div>
  );
}
