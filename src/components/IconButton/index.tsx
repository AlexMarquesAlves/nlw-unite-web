import { ComponentProps, ReactNode } from "react";

interface IconButtonProps extends ComponentProps<"button"> {
  children: ReactNode;
}

export function IconButton(props: IconButtonProps) {
  return <button {...props}>{props.children}</button>;
}
