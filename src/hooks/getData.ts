import { apiFetch } from "@/lib/api";
import { useEffect, useState } from "react";

export function useGames() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    setLoading(true);
    try {
      const data = await apiFetch("/games/effective/list");
      setGames(data);
    } finally {
      setLoading(false);
    }
  }

  return { games, loading, reload: load };
}
