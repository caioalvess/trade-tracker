import { Button } from "@/components/ui/button";
import { RotateCcw } from "lucide-react";

export function Undo() {
  return (
    <Button className="w-full">
      <RotateCcw /> Undo
    </Button>
  );
}
