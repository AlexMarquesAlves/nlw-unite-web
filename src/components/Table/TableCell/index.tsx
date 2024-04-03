import { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface TableCellProps extends ComponentProps<"td"> {
  children: ReactNode;
}

export function TableCell({ children, ...props }: TableCellProps) {
  return (
    <>
      <td
        {...props}
        className={twMerge("px-4 py-3 text-sm text-zinc-300", props.className)}
      >
        {children}
      </td>
    </>
  );
}
