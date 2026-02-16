import { apiFetch } from "./client";
import type {
  Project,
  // CreateProjectForm,
  EditProjectForm,
} from "./types";

//  Get all projects (used in admin panel and public lists)
// export function getProjects(page = 1): Promise<PaginatedResponse<Project>> {
//   return apiFetch<PaginatedResponse<Project>>(`/projects?page=${page}`);
// }
// Get all featured projects, where is_featured=1 (used in public portfolio)
// export function getFeaturedProjects(
//   page = 1,
// ): Promise<PaginatedResponse<Project>> {
//   return apiFetch<PaginatedResponse<Project>>(
//     `/projects?is_featured=1&page=${page}`,
//   );
// }

// Get a specific project by its ID
export function getProject(id: number) {
  return apiFetch<Project>(`/projects/${id}`);
}

// Create a new project
export function createProject(formData: FormData) {
  return apiFetch("/projects", {
    method: "POST",
    body: formData,
  });
}

export function updateProject(id: number, payload: EditProjectForm) {
  return apiFetch<Project>(`/projects/${id}`, {
    method: "PUT",
    body: JSON.stringify(payload),
  });
}

// Delete a project
// export function deleteProject(id: number) {
//   return apiFetch(`/projects/${id}`, {
//     method: "DELETE",
//   });
// }
