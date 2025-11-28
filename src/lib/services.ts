import type { GamesFilters } from "../components/filter-games";
import type { Game } from "../components/games-table";
import type { Provider } from "../constants/types";

import { http } from "./http";

export async function getGames(filters: GamesFilters): Promise<Game[]> {
  const params = new URLSearchParams({
    search: filters.search,
    provider: filters.provider,
    category: filters.category,
    enabled: filters.showEnabledOnly ? "1" : "",
  });

  return http(`/games?${params.toString()}`);
}

export async function getProviders(): Promise<Provider[]> {
  return http("/providers");
}
