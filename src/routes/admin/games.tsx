import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { FiltersGames, type GamesFilters } from "../../components/filter-games";
import { GamesTable } from "../../components/games-table";
import { getGames } from "../../lib/services"; // ✅ updated import
import { Header } from "../../components/header";

export default function GamesPage() {
  const [filters, setFilters] = useState<GamesFilters>({
    search: "",
    provider: "",
    category: "",
    showEnabledOnly: false,
  });

  const {
    data: games,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["games", filters],
    queryFn: () => getGames(filters), // ✅ no more unsafe key parsing
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
        {isError ? (
          <p className="p-4 text-red-600">Failed to load games.</p>
        ) : (
          <GamesTable games={games || []} loading={isLoading} />
        )}
      </div>
    </main>
  );
}
