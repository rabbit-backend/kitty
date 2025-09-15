import type { FC } from "react";
import { Button } from "@/components/ui/button";
import { Layers, Database } from "lucide-react";
import { NavLink, Outlet } from "react-router";

export const ToolBox: FC = () => {
  return (
    <div className="w-[400px] h-full border-r">
      <div className="p-2 border-b flex gap-1 items-center">
        <NavLink to={"/sources"}>
          <Button variant={"secondary"} size={"icon"} className="size-8">
            <Database />
          </Button>
        </NavLink>

        <NavLink to={"/layers"}>
          <Button variant={"secondary"} size={"icon"} className="size-8">
            <Layers />
          </Button>
        </NavLink>
      </div>
      <div className="p-1 overflow-hidden">
        <Outlet />
      </div>
    </div>
  );
};
