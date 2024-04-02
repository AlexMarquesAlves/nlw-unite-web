import { ReactNode } from "react";

interface AttendeeListProps {
  children?: ReactNode;
}

export function AttendeeList({ children }: AttendeeListProps) {
  return (
    <>
      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-bold">Participantes</h1>
        <div className="px-3 w-72 py-1.5 border border-white/10 rounded-lg text-sm flex items-center gap-3">
          ícone
          <input
            className="flex-1 bg-transparent outline-none"
            placeholder="Buscar participantes..."
          />
        </div>
        {children}
      </div>
    </>
  );
}
