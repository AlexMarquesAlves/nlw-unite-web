import { ComponentProps, ReactNode } from "react";

interface IconButtonProps extends ComponentProps<"button"> {
  children: ReactNode;
  transparent?: boolean;
}

export function IconButton({ transparent, ...props }: IconButtonProps) {
  return (
    <button
      {...props}
      className={
        transparent
          ? "border rounded-md bg-black/20 border-white/10 p-1.5"
          : "border rounded-md bg-white/10 border-white/10 p-1.5"
      }
    >
      {props.children}
    </button>
  );
}
