import { ReactNode } from "react";

interface TableHeaderProps {
  children: ReactNode;
}

export function TableHeader({ children }: TableHeaderProps) {
  return (
    <>
      <th className="px-4 py-3 text-sm font-semibold text-left">{children}</th>
    </>
  );
}
