import type { GamesFilters } from "../components/filter-games";
import type { Game } from "../components/games-table";
import type { Provider } from "../constants/types";
import { apiFetch } from "./api";

export async function fetchGames(filters: GamesFilters): Promise<Game[]> {
  const params = new URLSearchParams({
    search: filters.search,
    provider: filters.provider,
    category: filters.category,
    enabled: filters.showEnabledOnly ? "1" : "",
  });

  return apiFetch(`/games?${params.toString()}`);
}

export async function fetchProviders(): Promise<Provider[]> {
  return apiFetch("/providers");
}
