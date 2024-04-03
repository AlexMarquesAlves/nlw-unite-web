import { ComponentProps, ReactNode } from "react";

interface TableCellProps extends ComponentProps<"td"> {
  children: ReactNode;
}

export function TableCell({ children, ...props }: TableCellProps) {
  return (
    <>
      <td className="px-4 py-3 text-sm font-semibold text-left" {...props}>
        {children}
      </td>
    </>
  );
}
