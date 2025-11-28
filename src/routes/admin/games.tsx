import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { FiltersGames, type GamesFilters } from "../../components/filter-games";
import { GamesTable } from "../../components/games-table";
import { fetchGames } from "../../lib/fetch";
import { Header } from "../../components/header";

export default function GamesPage() {
  const [filters, setFilters] = useState<GamesFilters>({
    search: "",
    provider: "",
    category: "",
    showEnabledOnly: false,
  });

  const { data, isLoading } = useQuery({
    queryKey: ["games", filters],
    queryFn: ({ queryKey }) => fetchGames(queryKey[1] as GamesFilters),
    placeholderData: (prev) => prev,
  });

  return (
    <main className="p-6 space-y-6">
      <Header
        title="Games"
        description="Browse and manage integrated casino games"
      />
      <FiltersGames filters={filters} setFilters={setFilters} />
      <div className="rounded-xl border bg-card">
        <GamesTable games={data || []} loading={isLoading} />
      </div>
    </main>
  );
}
