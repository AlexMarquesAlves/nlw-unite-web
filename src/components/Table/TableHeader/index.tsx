import { ComponentProps, ReactNode } from "react";

interface TableHeaderProps extends ComponentProps<"th"> {
  children: ReactNode;
}

export function TableHeader({ children, ...props }: TableHeaderProps) {
  return (
    <>
      <th className="px-4 py-3 text-sm font-semibold text-left" {...props}>
        {children}
      </th>
    </>
  );
}
