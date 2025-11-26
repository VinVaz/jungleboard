import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "../components/ui/table";
import { Badge } from "../components/ui/badge";
import { Switch } from "../components/ui/switch";

export type Game = {
  id: string;
  name: string;
  provider: string;
  category: string;
  enabled: boolean;
  thumbnail: string;
};

type GamesTableProps = {
  games: Game[];
  loading: boolean;
};

export function GamesTable({ games, loading }: GamesTableProps) {
  if (loading) return <p>Loading...</p>;

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Thumbnail</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Provider</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Enabled</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {games.map((game) => (
          <TableRow key={game.id}>
            <TableCell>
              <img
                src={game.thumbnail}
                alt={game.name}
                className="w-16 h-10 object-cover rounded"
              />
            </TableCell>

            <TableCell className="font-medium">{game.name}</TableCell>

            <TableCell>
              <Badge variant="secondary">{game.provider}</Badge>
            </TableCell>

            <TableCell>{game.category}</TableCell>

            <TableCell>
              <Switch checked={game.enabled} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
