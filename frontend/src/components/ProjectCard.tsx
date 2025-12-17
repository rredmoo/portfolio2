import type { Project } from "../api/types";

interface ProjectCardTypes {
    project: Project;
}

export default function ProjectCard({ project }:ProjectCardTypes) {
  return (
    <article>
      <h3>{project.id}. {project.title}</h3>
      <p>{project.short_description}</p>
      <p>{project.description}</p>
      <p>{project.technologies_used}</p>
      <p>{project.link}</p>
      <p>{project.is_featured}</p>
      <p>{project.created_at}</p>
      <p>{project.updated_at}</p>
    </article>
  );
}

