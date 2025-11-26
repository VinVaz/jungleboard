import { Link } from "@tanstack/react-router";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";

type GameCardProps = {
  id: string;
  name: string;
  provider: string;
  imageUrl: string;
  category: string;
  rtp: number;
  enabled: boolean;
};

export const GameCard = ({
  id,
  name,
  imageUrl,
  provider,
  category,
  rtp,
  enabled,
}: GameCardProps) => {
  return (
    <Link to="/games" params={{ gameId: id }} className="block">
      <Card className="hover:shadow-lg transition-shadow cursor-pointer">
        <CardHeader className="p-0">
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-40 object-cover rounded-t-lg"
          />
        </CardHeader>

        <CardContent className="pt-4 space-y-2">
          <h2 className="font-semibold">{name}</h2>

          <div className="text-sm text-muted-foreground">{provider}</div>

          <div className="flex gap-2">
            <Badge variant="secondary">{category}</Badge>
            <Badge variant="outline">{rtp}% RTP</Badge>
          </div>
        </CardContent>

        <CardFooter>
          <Badge
            variant={enabled ? "default" : "destructive"}
            className={enabled ? "bg-emerald-500" : "bg-red-500"}
          >
            {enabled ? "Enabled" : "Disabled"}
          </Badge>
        </CardFooter>
      </Card>
    </Link>
  );
};
