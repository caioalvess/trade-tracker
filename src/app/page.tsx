import { AdvancedMetrics } from "@/components/backtest/advanced-metrics";
import { AreaChart } from "@/components/backtest/chart";
import { Metrics } from "@/components/backtest/metrics";
import { TradeControl } from "@/components/backtest/trade-control";
import { TradeOptions } from "@/components/backtest/trade-options";

export default function Component() {
  return (
    <div className="w-full flex flex-col gap-4 h-screen">
      <div className="w-full flex">
        <div className="min-h-fit pt-4 pl-4">
          <TradeOptions />
        </div>
        <div>
          <TradeControl />
        </div>
        <div className="flex-1 pt-4 pr-4">
          <Metrics />
        </div>
      </div>

      <div className="w-full flex px-4 flex-1 pb-4 gap-4">
        <div className="flex-1">
          <AreaChart />
        </div>
        <div>
          <AdvancedMetrics />
        </div>
      </div>
    </div>
  );
}
