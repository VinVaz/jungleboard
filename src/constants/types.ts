export type Provider = {
  id: number;
  name: string;
  logoUrl: string;
  apiHealth: "ok" | "warning" | "error";
  enabled: boolean;
  lastSync: string | null;
  gamesCount?: number;
};
