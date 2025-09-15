import type { FC } from "react";
import logo from "@/assets/kitty.png";

export const Header: FC = () => {
  return (
    <div className="p-2 h-[var(--header-height)] flex items-center shadow-sm gap-2">
      <img src={logo} width={40} height={40} />
      <span className="text-xl">Kitten</span>
    </div>
  );
};
