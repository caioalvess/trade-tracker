import { AddLoss } from "./buttons/add-loss";
import { AddProfit } from "./buttons/add-profit";
import { SetInitial } from "./buttons/set-initial";
import { Undo } from "./buttons/undo";
import { Initial } from "./inputs/initial";
import { Loss } from "./inputs/loss";
import { Profit } from "./inputs/profit";

export function TradeControl() {
  return (
    <div className="w-full max-w-sm space-y-4 p-4">
      <div className="grid grid-cols-3 gap-2">
        <Initial />
        <Profit />
        <Loss />
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
