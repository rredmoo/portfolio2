import { useState } from "react";
import type { Project } from "../../../../api/types";
import { Card, PopupOverlay, PopupContent } from "./Projects.styles";
import { useEffect } from "react";
interface ProjectCardTypes {
  project: Project;
  type?: "left" | "right";
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
  const [open, setOpen] = useState(false);
  const isMobile = window.innerWidth < 768;

  const limit = type === "left" ? (isMobile ? 180 : 400) : isMobile ? 80 : 55;
  const { text, charLimit } = DescriptionCharLimit(project.description, limit);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <Card>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="actions"
          >
            <button>
              {new URL(project.link).hostname === "wiki.dadamov.info"
                ? "View Docs"
                : "View"}
            </button>
          </a>
        )}
        <h1>
          {project.title}
        </h1>
        {/* <p>{project.short_description}</p> Displayed in admin panel */}
        <p className="projectDescriptionPublic">
          {text}
          {charLimit && (
            <span className="readMore" onClick={() => setOpen(true)}>
              ...Read More
            </span>
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
      </Card>
      {open && (
        <PopupOverlay onClick={() => setOpen(false)}>
          <PopupContent onClick={(e) => e.stopPropagation()}>
            <button className="closeBtn" onClick={() => setOpen(false)}>
              ×
            </button>

            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </PopupContent>
        </PopupOverlay>
      )}
    </>
  );
}
