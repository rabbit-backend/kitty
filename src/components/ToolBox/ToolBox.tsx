import type { FC } from "react";
import { Button } from "@/components/ui/button";
import { Layers, Image } from "lucide-react";

export const ToolBox: FC = () => {
  return (
    <div className="w-[480px] h-full border-r">
      <div className="p-2 border-b flex gap-1 items-center">
        <Button variant={"secondary"} size={"icon"} className="size-8">
          <Layers />
        </Button>
        <Button variant={"secondary"} size={"icon"} className="size-8">
          <Image />
        </Button>
      </div>
    </div>
  );
};
