//  This is the file that gets called from other ./api/... files to fetches apis from 
//  laravel and stores them as variables

// URL api variable used below in apiFetcher
const API_URL = "/api";

export async function apiFetch<T>(
  url: string,
  options: RequestInit = {}
): Promise<T> {
  const token = localStorage.getItem("token");

  const res = await fetch(`${API_URL}${url}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    },
  });

    if (!res.ok) {
    const errorText = await res.text();
    throw new Error(errorText || "Request failed");
  }

  // handle 204 / empty body
  if (res.status === 204) {
    return null as T;
  }

  return res.json() as Promise<T>;
}

