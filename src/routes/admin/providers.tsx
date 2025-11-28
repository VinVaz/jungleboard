import {
  Table,
  TableHead,
  TableHeader,
  TableBody,
  TableCell,
  TableRow,
} from "../../components/ui/table";

import { useQuery } from "@tanstack/react-query";
import { fetchProviders } from "../../lib/fetch";
import { Badge } from "../../components/ui/badge";
import { Header } from "../../components/header";

function Providers() {
  const { data: providers, isLoading } = useQuery({
    queryKey: ["providers"],
    queryFn: fetchProviders,
  });

  return (
    <main className="p-6 space-y-6">
      <Header
        title="Providers"
        description="Manage entire providers and sync game catalogs"
      />

      <div className="rounded-xl border bg-card">
        {isLoading ? (
          <p className="p-4">Loading...</p>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[240px]">Provider</TableHead>
                <TableHead>Total Games</TableHead>
                <TableHead>API Health</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Sync</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {providers?.map((p) => (
                <TableRow key={p.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <img
                        src={p.logoUrl}
                        className="h-10 w-10 rounded-md object-cover"
                      />
                      <span>{p.name}</span>
                    </div>
                  </TableCell>

                  {/* gamesCount may not exist yet */}
                  <TableCell>{p.gamesCount ?? "-"}</TableCell>

                  <TableCell>
                    {p.apiHealth === "ok" ? (
                      <Badge className="bg-emerald-50 text-emerald-700 border-emerald-200">
                        OK
                      </Badge>
                    ) : (
                      <Badge className="bg-yellow-50 text-yellow-700 border-yellow-200">
                        Warning
                      </Badge>
                    )}
                  </TableCell>

                  <TableCell>
                    {p.enabled ? (
                      <Badge className="bg-blue-50 text-blue-700 border-blue-200">
                        Enabled
                      </Badge>
                    ) : (
                      <Badge className="bg-gray-50 text-gray-600 border-gray-200">
                        Disabled
                      </Badge>
                    )}
                  </TableCell>

                  <TableCell>{p.lastSync ?? "Never"}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>
    </main>
  );
}

export default Providers;
