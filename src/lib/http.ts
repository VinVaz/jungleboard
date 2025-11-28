export async function http(url: string, options: RequestInit = {}) {
  const token = localStorage.getItem("access_token");

  const res = await fetch(`${import.meta.env.VITE_SERVER_URL}${url}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    },
  });

  if (!res.ok) {
    console.error("API error:", res.status, res.statusText);
    throw new Error(`API Error: ${res.status}`);
  }

  return res.json();
}
