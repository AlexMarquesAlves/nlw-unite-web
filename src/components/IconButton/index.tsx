import { ComponentProps, ReactNode } from "react";

interface IconButtonProps extends ComponentProps<"button"> {
  children: ReactNode;
}

export function IconButton(props: IconButtonProps) {
  return (
    <button
      {...props}
      className="border rounded-md bg-white/10 border-white/10 p-1.5"
    >
      {props.children}
    </button>
  );
}
