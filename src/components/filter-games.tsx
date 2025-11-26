import type { ChangeEvent } from "react";
import { Input } from "../components/ui/input";
import { Switch } from "../components/ui/switch";
import { Label } from "../components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectItem,
  SelectContent,
} from "../components/ui/select";

export type GamesFilters = {
  search: string;
  provider: string;
  category: string;
  showEnabledOnly: boolean;
};

type FiltersGamesProps = {
  filters: GamesFilters;
  setFilters: (f: GamesFilters) => void;
};

export function FiltersGames({ filters, setFilters }: FiltersGamesProps) {
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, search: e.target.value });
  };

  const handleProvider = (val: string) => {
    setFilters({ ...filters, provider: val });
  };

  const handleCategory = (val: string) => {
    setFilters({ ...filters, category: val });
  };

  const handleEnabled = (checked: boolean) => {
    setFilters({ ...filters, showEnabledOnly: checked });
  };

  return (
    <div className="flex flex-wrap items-end gap-4 p-4 bg-muted/30 rounded-lg">
      <div>
        <Label>Search</Label>
        <Input
          value={filters.search}
          onChange={handleSearch}
          placeholder="Search games..."
          className="w-64"
        />
      </div>

      <div>
        <Label>Provider</Label>
        <Select value={filters.provider} onValueChange={handleProvider}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="All providers" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All</SelectItem>
            <SelectItem value="Pragmatic Play">Pragmatic Play</SelectItem>
            <SelectItem value="Evolution">Evolution</SelectItem>
            <SelectItem value="Hacksaw">Hacksaw</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label>Category</Label>
        <Select value={filters.category} onValueChange={handleCategory}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="All categories" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All</SelectItem>
            <SelectItem value="Slot">Slot</SelectItem>
            <SelectItem value="Live Casino">Live Casino</SelectItem>
            <SelectItem value="Crash">Crash</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center gap-2">
        <Switch
          checked={filters.showEnabledOnly}
          onCheckedChange={handleEnabled}
        />
        <Label>Enabled only</Label>
      </div>
    </div>
  );
}
