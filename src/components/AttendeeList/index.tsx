import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  MoreHorizontal,
  Search,
} from "lucide-react";
import { ChangeEvent, ReactNode, useState } from "react";
import { IconButton } from "../IconButton";
import { Table } from "../Table";
import { TableHeader } from "../Table/TableHeader";
import { TableCell } from "../Table/TableCell";
import { TableRow } from "../Table/TableRow";

interface AttendeeListProps {
  children?: ReactNode;
}

export function AttendeeList({ children }: AttendeeListProps) {
  const [valorDoInput, setValorDoInput] = useState("");

  function onSearchInputChange(event: ChangeEvent<HTMLInputElement>) {
    setValorDoInput(event.target.value);
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-bold">Participantes</h1>
        <div className="px-3 w-72 py-1.5 border border-white/10 rounded-lg text-sm flex items-center gap-3">
          <Search className="size-4 text-emerald-300" />
          <input
            onChange={onSearchInputChange}
            className="flex-1 p-0 text-sm bg-transparent border-0 outline-none"
            placeholder="Buscar participantes..."
          />
        </div>
        {valorDoInput}
      </div>

      <Table>
        <thead>
          <tr className="border-b border-white/10">
            <TableHeader style={{ width: 64 }}>
              <input
                type="checkbox"
                className="border rounded size-4 bg-black/20 border-white/10"
                name=""
                id=""
              />
            </TableHeader>
            <TableHeader>Código</TableHeader>
            <TableHeader>Participantes</TableHeader>
            <TableHeader>Data de inscrição</TableHeader>
            <TableHeader>Data do check-in</TableHeader>
            <th
              style={{ width: 64 }}
              className="px-4 py-3 text-sm font-semibold text-left"
            ></th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 8 }).map((_, i) => {
            return (
              <TableRow key={i}>
                <TableCell>
                  <input
                    type="checkbox"
                    className="border rounded size-4 bg-black/20 border-white/10"
                    name=""
                    id=""
                  />
                </TableCell>
                <TableCell>12383</TableCell>
                <TableCell>
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold text-white">
                      Diego Schell Fernandes
                    </span>
                    <span>diego@rocketseat.com.br</span>
                  </div>
                </TableCell>
                <TableCell>7 dias atrás</TableCell>
                <TableCell>3 dias atrás</TableCell>
                <TableCell>
                  <IconButton transparent>
                    <MoreHorizontal className="size-4" />
                  </IconButton>
                </TableCell>
              </TableRow>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <TableCell colSpan={3}>Mostrando 10 de 228 itens</TableCell>
            <TableCell className="text-right" colSpan={3}>
              <div className="inline-flex items-center gap-8">
                <span>Página 1 de 23</span>

                <div className="flex gap-1.5">
                  <IconButton>
                    <ChevronsLeft className="size-4" />
                  </IconButton>

                  <IconButton>
                    <ChevronLeft className="size-4" />
                  </IconButton>

                  <IconButton>
                    <ChevronRight className="size-4" />
                  </IconButton>

                  <IconButton>
                    <ChevronsRight className="size-4" />
                  </IconButton>
                </div>
              </div>
            </TableCell>
          </tr>
        </tfoot>
      </Table>

      {children}
    </div>
  );
}
