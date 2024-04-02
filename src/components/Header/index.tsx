import { ReactNode } from "react";
import nlwUniteIcon from "../../assets/nlw-unite-icon.svg";

interface HeaderProps {
  children?: ReactNode;
}

export function Header({ children }: HeaderProps) {
  return (
    <>
      <div className="flex items-center gap-5 py-2">
        <img src={nlwUniteIcon} alt="" />

        <nav className="flex items-center gap-5">
          <a href="" className="font-medium text-sm text-zinc-300">
            Eventos
          </a>
          <a href="" className="font-medium text-sm">
            Participantes
          </a>
        </nav>
      </div>
      {children}
    </>
  );
}
