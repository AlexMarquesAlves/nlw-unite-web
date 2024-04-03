import { ComponentProps, ReactNode } from "react";

interface IconButtonProps extends ComponentProps<"button"> {
  children: ReactNode;
}

export function IconButton({ children }: IconButtonProps) {
  return (
    <>
      <h1>IconButton</h1>
      {children}
    </>
  );
}
