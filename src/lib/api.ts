import type { GamesFilters } from "../components/filter-games";
import type { Game } from "../components/games-table";

export const mockGames: Game[] = [
  {
    id: "1",
    name: "Gates of Olympus",
    provider: "Pragmatic Play",
    category: "Slot",
    enabled: true,
    thumbnail: "https://picsum.photos/seed/gates/200/120",
  },
  {
    id: "2",
    name: "Sweet Bonanza",
    provider: "Pragmatic Play",
    category: "Slot",
    enabled: false,
    thumbnail: "https://picsum.photos/seed/sweet/200/120",
  },
  {
    id: "3",
    name: "Crazy Time",
    provider: "Evolution",
    category: "Live",
    enabled: true,
    thumbnail: "https://picsum.photos/seed/crazy/200/120",
  },
  {
    id: "4",
    name: "Aviator",
    provider: "Spribe",
    category: "Crash",
    enabled: true,
    thumbnail: "https://picsum.photos/seed/aviator/200/120",
  },
  {
    id: "5",
    name: "Wanted Dead or a Wild",
    provider: "Hacksaw",
    category: "Slot",
    enabled: false,
    thumbnail: "https://picsum.photos/seed/wanted/200/120",
  },
];

// Provide a default filters object so we never read properties of undefined.
const defaultFilters: GamesFilters = {
  search: "",
  provider: "",
  category: "",
  showEnabledOnly: false,
};

export const mockFetchGames = async (
  filters?: GamesFilters
): Promise<Game[]> => {
  const f = { ...defaultFilters, ...(filters ?? {}) };

  await new Promise((r) => setTimeout(r, 300)); // simulate latency

  return mockGames.filter((g) => {
    const matchesSearch =
      !f.search || g.name.toLowerCase().includes(f.search.toLowerCase());

    const matchesProvider =
      !f.provider ||
      f.provider === "All" ||
      g.provider.toLowerCase() === f.provider.toLowerCase();

    const matchesCategory =
      !f.category || f.category === "All" || g.category === f.category;
    const matchesEnabled = !f.showEnabledOnly || g.enabled === true;

    return (
      matchesSearch && matchesProvider && matchesCategory && matchesEnabled
    );
  });
};
