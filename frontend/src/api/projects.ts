import { apiFetch } from "./client";
import type { Project, PaginatedResponse } from './types';


//  Get all projects
export function getProjects(
    page = 1
): Promise<PaginatedResponse<Project>> {
    return apiFetch<PaginatedResponse<Project>>(`/projects?page=${page}`);
}