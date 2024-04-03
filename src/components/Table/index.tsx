import { ComponentProps, ReactNode } from "react";

interface TableProps extends ComponentProps<"table"> {
  children: ReactNode;
}

export function Table({ children, ...props }: TableProps) {
  return (
    <div className="border rounded-lg border-white/10">
      <table className="w-full" {...props}>
        {children}
      </table>
    </div>
  );
}
