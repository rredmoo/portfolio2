import { apiFetch } from "./client";
import type { Project, PaginatedResponse } from './types';
// Where all apis get defined, calling the ./api/client.ts function {apiFetch}


//  Get all projects
export function getProjects(page = 1){
    return apiFetch<PaginatedResponse<Project>>('/projects?page=${page}');
}