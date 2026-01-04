import { apiFetch } from "./client";

export async function login(email: string, password: string) {
    const loginApiFetch = await apiFetch("/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
    });

    if(!loginApiFetch.ok) throw new Error("AUTH LOG: Login failed");
    return loginApiFetch.json();
}

export async function me() {
  const loginApiFetch = await apiFetch("/admin");
  if (!loginApiFetch.ok) throw new Error("AUTH LOG: Unauthorized");
  return loginApiFetch.json();
}