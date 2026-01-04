//  This is the file that gets called from other ./api/... files to fetches apis from 
//  laravel and stores them as variables

// URL api variable used below in apiFetcher
const API_URL = "http://localhost:9000/api";

export async function apiFetch(
  url: string,
  options: RequestInit = {}
) {
  const token = localStorage.getItem("token");

  return fetch(`${API_URL}${url}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    },
  });
}
