import { ReactNode } from 'react';

interface TableCellProps {
  children: ReactNode;
}

export function TableCell({ children }: TableCellProps) {
  return (
    <>
      <h1>TableCell</h1>
      {children}
    </>
  );
}
