import { apiFetch } from "./client";
import type { Skill, PaginatedResponse } from './types';


//  Get all skills
export default function getSkills(
    page = 1
): Promise<PaginatedResponse<Skill>> {
    return apiFetch<PaginatedResponse<Skill>>(`/skills?page=${page}`);
}

// Create a new skill
export function createSkill(skill: Omit<Skill, "id">) {
  return apiFetch<Skill>(`/skills`, {
    method: "POST",
    body: JSON.stringify(skill),
  });
}