//  Export interfaces for all models for typescript to understad eachs type

export interface Project {
    id: number;
    title: string;
    short_description: string;
    description: string;
    link: string | null;
    is_featured: boolean;
    imagePath: string;
    skills: Skill[];
    createdAt: string;
    updated_at: string;
}

export interface CreateProjectForm {
  title: string;
  short_description: string;
  description: string;
  link?: string;
  skills?: number[];
}

export interface EditProjectForm {
  title: string;
  short_description: string;
  description: string;
  link: string | null;
  is_featured: boolean;
  skills: number[];
};

export interface Skill {
    id: number;
    title: string;
    category: string;
    level: number;
    imagePath: string;
}

export interface ServerStats {
  serverStats: {
    cpuUsage: number;
    memoryUsage: number;
    currentTime: string;
  };
};

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