import { ReactNode } from "react";

interface TableProps {
  children: ReactNode;
}

export function Table({ children }: TableProps) {
  return (
    <div className="border rounded-lg border-white/10">
      <table className="w-full">{children}</table>
    </div>
  );
}
