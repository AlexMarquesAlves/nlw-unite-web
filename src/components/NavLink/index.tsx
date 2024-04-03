import { ReactNode } from "react";

interface NavLinkProps {
  children?: ReactNode;
}

export function NavLink({ children }: NavLinkProps) {
  return (
    <>
      <h1>NavLink</h1>
      {children}
    </>
  );
}