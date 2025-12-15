//  This is the file that gets called from other ./api/... files to fetches apis from 
//  laravel and stores them as variables

// Base api variable used below in apiFetcher
const API_BASE = 'http://localhost:9000/api'

export async function apiFetch<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const response = await fetch(`${API_BASE}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || 'API request has failed');
  }

  // returns either response in json
  return response.json();
}