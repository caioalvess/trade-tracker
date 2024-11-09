import { Button } from "@/components/ui/button";
import { Minus } from "lucide-react";

export function AddLoss() {
  return (
    <Button variant="destructive">
      <Minus /> Add Loss
    </Button>
  );
}
