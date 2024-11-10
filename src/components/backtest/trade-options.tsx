import { Dollar } from "./buttons/dollar";
import { Percent } from "./buttons/percent";
import { Reset } from "./buttons/reset";
import { Save } from "./buttons/save";

export function TradeOptions() {
  return (
    <div className="grid grid-cols-2 gap-2 w-full max-w-xs p-4 bg-zinc-900 rounded-lg">
      <div className="flex flex-col gap-2">
        <Save />
        <Reset />
      </div>

      <div className="flex flex-col gap-2">
        <Dollar />
        <Percent />
      </div>
    </div>
  );
}
