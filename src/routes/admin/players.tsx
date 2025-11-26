import { formatDate } from "../../lib/utils";

import {
  Table,
  TableHead,
  TableHeader,
  TableBody,
  TableCell,
  TableRow,
} from "../../components/ui/table";

import { Badge } from "../../components/ui/badge";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "../../components/ui/avatar";
import { Header } from "../../components/header";

const users = [
  {
    id: "1",
    name: "Rogério Almeida",
    email: "rogerio@example.com",
    imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=rogerio",
    joinedAt: "2024-07-22",
    status: "user",
  },
  {
    id: "2",
    name: "Marina Castro",
    email: "marina@example.com",
    imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=marina",
    joinedAt: "2023-12-11",
    status: "admin",
  },
  {
    id: "3",
    name: "Lucas Pereira",
    email: "lucas@example.com",
    imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=lucas",
    joinedAt: "2022-03-18",
    status: "user",
  },
  {
    id: "4",
    name: "Ana Luiza",
    email: "ana@example.com",
    imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=ana",
    joinedAt: "2024-01-04",
    status: "moderator",
  },
];

function Players() {
  return (
    <main className="p-6 space-y-6">
      <Header
        title="Manage Users"
        description="Filter, sort, and access detailed user profiles"
      />

      <div className="rounded-xl border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[240px]">Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Date Joined</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {users.map((u) => (
              <TableRow key={u.id}>
                {/* Avatar + Name */}
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={u.imageUrl} />
                      <AvatarFallback>
                        {u.name.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>

                    <span>{u.name}</span>
                  </div>
                </TableCell>

                {/* Email */}
                <TableCell>{u.email}</TableCell>

                {/* JoinedAt formatted */}
                <TableCell>{formatDate(u.joinedAt)}</TableCell>

                {/* Status badge */}
                <TableCell>
                  {u.status === "user" && (
                    <Badge
                      variant="outline"
                      className="bg-emerald-50 text-emerald-700 border-emerald-200"
                    >
                      User
                    </Badge>
                  )}

                  {u.status === "admin" && (
                    <Badge
                      variant="outline"
                      className="bg-blue-50 text-blue-700 border-blue-200"
                    >
                      Admin
                    </Badge>
                  )}

                  {u.status === "moderator" && (
                    <Badge
                      variant="outline"
                      className="bg-orange-50 text-orange-600 border-orange-200"
                    >
                      Moderator
                    </Badge>
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

export default Players;
