import type { Project } from "../../../../api/types";
import { Card } from "./Projects.styles";
interface ProjectCardTypes {
  project: Project;
  type?: "left" | "right";
}

function daysSinceCreation(dateString: string): number {
  const creationDate = new Date(dateString).getTime();
  const currentDate = Date.now();
  const MSDifference = currentDate - creationDate;

  return Math.floor(MSDifference / (1000 * 60 * 60 * 24));
}

function DescriptionCharLimit(text: string, limit: number) {
  if (text.length <= limit) return { text, charLimit: false };
  return {
    text: text.slice(0, limit - 12).trimEnd(), // limit - 12, because 12chars is what "...read more" takes
    charLimit: true,
  };
}

export default function ProjectCard({
  project,
  type = "right",
}: ProjectCardTypes) {
  const isMobile = window.innerWidth < 768;

  const limit = type === "left" ? (isMobile ? 180 : 400) : isMobile ? 80 : 55;
  const { text, charLimit } = DescriptionCharLimit(project.description, limit);

  return (
    <Card>
      <h1>
        {project.title} ( {daysSinceCreation(project.createdAt)} days ago)
      </h1>
      {/* <p>{project.short_description}</p> Displayed in admin panel */}
      <p className="projectDescriptionPublic">
        {text}
        {charLimit && (
          <>
            <span className="readMore">...Read More</span>
          </>
        )}
      </p>
      <img src={"/storage/" + project.imagePath} alt={project.title}></img>
      <div className="skillsBanner">
        {project.skills.map((skill) => (
          <span className="skill" key={skill.id}>
            {skill.title}
          </span>
        ))}
      </div>
      {/* If project contains a link, the button will be created, if its NULL, nothing will be displayed */}
      {project.link && (
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          <button>View Docs</button>
        </a>
      )}
    </Card>
  );
}
