import type { Project } from "../../../../api/types";
import { Card } from "./Projects.styles";

interface ProjectCardTypes {
    project: Project;
}

function daysSinceCreation (dateString: string):number {
  const creationDate = new Date(dateString).getTime();
  const currentDate = Date.now();
  const MSDifference = currentDate - creationDate;

  return Math.floor(MSDifference / (1000 * 60 * 60 * 24));
};

export default function ProjectCard({ project }:ProjectCardTypes) {
  return (
    <Card>
      <h1>{project.title} ( {daysSinceCreation(project.created_at)} days ago)</h1>
      <p>{project.short_description}</p> {/* Displayed */}
      {/* <p>{project.description}</p> displayed when "read more" applied */}
      <img src={"/storage/" + project.imagePath} alt={project.title}></img>
      <p>Updated {daysSinceCreation(project.updated_at)} days ago</p>
      {/* If project contains a link, the button will be created, if its NULL, nothing will be displayed */}
      {project.link && ( 
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          <button>View Project</button>
        </a>
      )}
    </Card>
  );
}

