import type { Project } from "../../../../api/types";
import { Card } from "./Projects.styles";

interface ProjectCardTypes {
    project: Project;
}

export default function ProjectCard({ project }:ProjectCardTypes) {
  return (
    <Card>
      <h3>{project.title}</h3>
      <p className="">{project.short_description}</p>
      <p>{project.description}</p>
      <p>{project.technologies_used}</p>
      <p>{project.link}</p>
      <p>{project.is_featured}</p>
      <p>{project.created_at}</p>
      <p>{project.updated_at}</p>
    </Card>
  );
}

