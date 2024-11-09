import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export function AddProfit() {
  return (
    <Button className="bg-positive" variant="positive">
      <Plus /> Add Profit
    </Button>
  );
}
