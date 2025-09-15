import type { FC } from "react";

export const Header: FC = () => {
  return (
    <div className="p-2 h-[var(--header-height)] flex items-center shadow-sm">
      <span className="text-xl">Kitten</span>
    </div>
  );
};
