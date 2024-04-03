import { ReactNode } from 'react';

interface TableRowProps {
  children: ReactNode;
}

export function TableRow({ children }: TableRowProps) {
  return (
    <>
      <h1>TableRow</h1>
      {children}
    </>
  );
}
