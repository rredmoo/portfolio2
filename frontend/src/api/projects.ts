import { apiFetch } from "./client";
// Where all apis get defined, calling the ./api/client.ts function {apiFetch}


//  Get all projects
export function getProjects(page = 1){
    return apiFetch('/projects?page=${page}');
}