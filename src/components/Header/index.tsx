import { ReactNode } from "react";
import nlwUniteIcon from "../../assets/nlw-unite-icon.svg";
import { NavLink } from "../NavLink";

interface HeaderProps {
  children?: ReactNode;
}

export function Header({ children }: HeaderProps) {
  return (
    <>
      <div className="flex items-center gap-5 py-2">
        <img src={nlwUniteIcon} alt="" />

        <nav className="flex items-center gap-5">
          {/* text-zinc-300 */}
          <NavLink href="/eventos">Eventos</NavLink>
          <NavLink href="/participantes">Participantes</NavLink>
        </nav>
      </div>
      {children}
    </>
  );
}
