export async function apiFetch(url: string, options: RequestInit = {}) {
  const token = localStorage.getItem("access_token");

  const res = await fetch(`http://localhost:3000${url}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    },
  });

  if (res.status === 401) {
    // TODO: refresh token if needed
    console.warn("Unauthorized");
  }

  return res.json();
}
