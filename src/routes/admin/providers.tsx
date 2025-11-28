import {
  Table,
  TableHead,
  TableHeader,
  TableBody,
  TableCell,
  TableRow,
} from "../../components/ui/table";

import { useQuery } from "@tanstack/react-query";
import { getProviders } from "../../lib/services";
import { Badge } from "../../components/ui/badge";
import { Header } from "../../components/header";

function Providers() {
  const {
    data: providers,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["providers"],
    queryFn: getProviders,
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
        ) : isError ? (
          <p className="p-4 text-red-500">Failed to load providers.</p>
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
                        src={p.logoUrl || "/fallback-logo.svg"}
                        alt={p.name}
                        className="h-10 w-10 rounded-md object-contain"
                      />
                      <span>{p.name}</span>
                    </div>
                  </TableCell>

                  <TableCell>{p.gamesCount ?? "-"}</TableCell>

                  <TableCell>
                    {p.apiHealth === "ok" ? (
                      <Badge
                        variant="outline"
                        className="text-emerald-700 border-emerald-300"
                      >
                        OK
                      </Badge>
                    ) : (
                      <Badge
                        variant="outline"
                        className="text-yellow-700 border-yellow-300"
                      >
                        Warning
                      </Badge>
                    )}
                  </TableCell>

                  <TableCell>
                    {p.enabled ? (
                      <Badge
                        variant="outline"
                        className="text-blue-700 border-blue-300"
                      >
                        Enabled
                      </Badge>
                    ) : (
                      <Badge
                        variant="outline"
                        className="text-gray-600 border-gray-300"
                      >
                        Disabled
                      </Badge>
                    )}
                  </TableCell>

                  <TableCell>{p.lastSync || "Never"}</TableCell>
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
