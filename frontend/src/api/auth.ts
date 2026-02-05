import { apiFetch } from "./client";
import type { User } from "./types";

export async function login(email: string, password: string) {
  console.log("Login started")
  return apiFetch<{ token: string }>("/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
}

export async function me() {
  return apiFetch<User>("/admin");
}
