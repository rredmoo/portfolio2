//  Export interfaces for all models for typescript to understad eachs type

export interface Project {
    id: number;
    title: string;
    short_description: string;
    description: string;
    technologies_used: string[] | null;
    link: string | null;
    is_featured: boolean;
    skills: Skill[];
    created_at: string;
    updated_at: string;
}

export interface Skill {
    id: number;
    title: string;
    category: string;
    level: string;
}


// Laravels pagination
export interface PaginatedResponse<T> {
    data: T[];
    current_page: number;
    last_page: number;
    per_page: number;
    total:number;
}

export type User = {
  id: number;
  email: string;
  name: string;
};