import { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface IconButtonProps extends ComponentProps<"button"> {
  children: ReactNode;
  transparent?: boolean;
}

export function IconButton({ transparent, ...props }: IconButtonProps) {
  return (
    <button
      {...props}
      // className={
      //   transparent
      //     ? "border rounded-md bg-black/20 border-white/10 p-1.5"
      //     : "border rounded-md bg-white/10 border-white/10 p-1.5"
      // }
      className={twMerge(
        "border rounded-md border-white/10 p-1.5",
        transparent ? "bg-black/20" : "bg-white/10",
        props.disabled ? "opacity-50" : null
      )}
    >
      {props.children}
    </button>
  );
}
