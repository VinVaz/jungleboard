import {
  Table,
  TableHead,
  TableHeader,
  TableBody,
  TableCell,
  TableRow,
} from "../../components/ui/table";

import { Badge } from "../../components/ui/badge";
import { Header } from "../../components/header";

const providers = [
  {
    id: "1",
    name: "Pragmatic Play",
    logo: "https://dummyimage.com/60x60/000/fff&text=P",
    games: 210,
    apiHealth: "ok",
    status: "enabled",
    lastSync: "2 hours ago",
  },
  {
    id: "2",
    name: "Evolution",
    logo: "https://dummyimage.com/60x60/000/fff&text=E",
    games: 45,
    apiHealth: "warning",
    status: "enabled",
    lastSync: "30 minutes ago",
  },
  {
    id: "3",
    name: "NetEnt",
    logo: "https://dummyimage.com/60x60/000/fff&text=N",
    games: 55,
    apiHealth: "ok",
    status: "disabled",
    lastSync: "1 day ago",
  },
];

function Providers() {
  return (
    <main className="p-6 space-y-6">
      <Header
        title="Providers"
        description="Manage entire providers and sync game catalogs"
      />

      <div className="rounded-xl border bg-card">
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
            {providers.map((p) => (
              <TableRow key={p.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <img
                      src={p.logo}
                      className="h-10 w-10 rounded-md object-cover"
                    />
                    <span>{p.name}</span>
                  </div>
                </TableCell>

                <TableCell>{p.games}</TableCell>

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
                  {p.status === "enabled" ? (
                    <Badge className="bg-blue-50 text-blue-700 border-blue-200">
                      Enabled
                    </Badge>
                  ) : (
                    <Badge className="bg-gray-50 text-gray-600 border-gray-200">
                      Disabled
                    </Badge>
                  )}
                </TableCell>

                <TableCell>{p.lastSync}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </main>
  );
}

export default Providers;
