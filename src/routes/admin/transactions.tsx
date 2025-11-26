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

const providerGames = [
  {
    id: "1",
    name: "Sweet Bonanza",
    rtp: 96.51,
    status: "enabled",
    restricted: ["BR"],
    thumbnail: "https://dummyimage.com/80x80/000/fff&text=SB",
  },
  {
    id: "2",
    name: "Gates of Olympus",
    rtp: 95.1,
    status: "enabled",
    restricted: [],
    thumbnail: "https://dummyimage.com/80x80/000/fff&text=GO",
  },
  {
    id: "3",
    name: "Big Bass Bonanza",
    rtp: 96.71,
    status: "disabled",
    restricted: ["CA", "UK"],
    thumbnail: "https://dummyimage.com/80x80/000/fff&text=BBB",
  },
];

function Transactions() {
  return (
    <main className="p-6 space-y-6">
      <Header
        title="Pragmatic Play — Games"
        description="Manage individual games for this provider"
      />

      <div className="rounded-xl border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[240px]">Game</TableHead>
              <TableHead>RTP</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Country Restrictions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {providerGames.map((g) => (
              <TableRow key={g.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <img
                      src={g.thumbnail}
                      className="h-10 w-10 rounded-md object-cover"
                    />
                    <span>{g.name}</span>
                  </div>
                </TableCell>

                <TableCell>{g.rtp}%</TableCell>

                <TableCell>
                  {g.status === "enabled" ? (
                    <Badge className="bg-emerald-50 text-emerald-700 border-emerald-200">
                      Enabled
                    </Badge>
                  ) : (
                    <Badge className="bg-red-50 text-red-700 border-red-200">
                      Disabled
                    </Badge>
                  )}
                </TableCell>

                <TableCell>
                  {g.restricted.length === 0 ? (
                    <Badge className="bg-gray-100 text-gray-700 border-gray-200">
                      None
                    </Badge>
                  ) : (
                    <div className="flex gap-2">
                      {g.restricted.map((c) => (
                        <Badge
                          key={c}
                          className="bg-orange-50 text-orange-700 border-orange-200"
                        >
                          {c}
                        </Badge>
                      ))}
                    </div>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </main>
  );
}

export default Transactions;
