import { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface TableRowProps extends ComponentProps<"tr"> {
  children: ReactNode;
}

export function TableRow({ children, ...props }: TableRowProps) {
  return (
    <>
      <tr
        {...props}
        className={twMerge(
          "border-b border-white/10 hover:bg-white/5",
          props.className
        )}
      >
        {children}
      </tr>
    </>
  );
}
