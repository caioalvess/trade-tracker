import { SetInitial } from "./components/backtest/buttons/set-initial";
import { AddProfit } from "./components/backtest/buttons/add-profit";
import { AddLoss } from "./components/backtest/buttons/add-loss";
import { Undo } from "./components/backtest/buttons/undo";
import { Input } from "@/components/ui/input";

export default function Component() {
  return (
    <div className="w-full max-w-sm space-y-4 p-4">
      <div className="grid grid-cols-3 gap-2">
        <Input type="number" />
        <Input type="number" />
        <Input type="number" />
      </div>
      <div className="grid grid-cols-3 gap-2">
        <SetInitial />
        <AddProfit />
        <AddLoss />
      </div>
      <Undo />
    </div>
  );
}
