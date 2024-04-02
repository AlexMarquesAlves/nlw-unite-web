import { ReactNode } from "react";

interface AttendeeListProps {
  children: ReactNode;
}

export function AttendeeList({ children }: AttendeeListProps) {
  return (
    <>
      <h1>Participantes</h1>
      {children}
    </>
  );
}
