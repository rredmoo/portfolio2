import { apiFetch } from "./client";
import type { Skill, PaginatedResponse } from './types';

// REPLACED WITH GRAPHQL SKILLS QUERY IN
//  Get all skills 
export default function getSkills(
    page = 1
): Promise<PaginatedResponse<Skill>> {
    return apiFetch<PaginatedResponse<Skill>>(`/skills?page=${page}`);
}

// Get a specific skill by id
export function getSkill(id: number) {
  return apiFetch<Skill>(`/skills/${id}`);
}

// Create a new skill
export function createSkill(formData: FormData) {
  return apiFetch(`/skills`, {
    method: "POST",
    body: formData,
  });
}

// Update an existing skill
export function updateSkill(id: number, skill: Omit<Skill, "id">) {
  return apiFetch<Skill>(`/skills/${id}`, {
    method: "PUT",
    body: JSON.stringify(skill),
  });
}

// Delete a skill
export function deleteSkill(id: number) {
  return apiFetch(`/skills/${id}`, {
    method: "DELETE",
  });
}
