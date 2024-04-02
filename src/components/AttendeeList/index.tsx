import { Search } from "lucide-react";
import { ReactNode } from "react";

interface AttendeeListProps {
  children?: ReactNode;
}

export function AttendeeList({ children }: AttendeeListProps) {
  return (
    <div>
      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-bold">Participantes</h1>
        <div className="px-3 w-72 py-1.5 border border-white/10 rounded-lg text-sm flex items-center gap-3">
          <Search className="size-4 text-emerald-300" />
          <input
            className="flex-1 bg-transparent outline-none"
            placeholder="Buscar participantes..."
          />
        </div>
      </div>

      <div className="border rounded-lg border-white/10">
        <table className="w-full ">
          <thead>
            <tr>
              <th>
                <input type="checkbox" name="" id="" />
              </th>
              <th>Código</th>
              <th>Participantes</th>
              <th>Data de inscrição</th>
              <th>Data do check-in</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <input type="checkbox" name="" id="" />
              </td>
              <td>12383</td>
              <td>
                <div>
                  <span>Diego Schell Fernandes</span>
                  <span>diego@rocketseat.com.br</span>
                </div>
              </td>
              <td>7 dias atrás</td>
              <td>3 dias atrás</td>
              <td></td>
            </tr>
          </tbody>

          <tfoot>
            <tr>
              <td colSpan={3}>Mostrando 10 de 228 itens</td>
              <td colSpan={3}>Página 1 de 23</td>
            </tr>
          </tfoot>
        </table>
      </div>
      {children}
    </div>
  );
}
