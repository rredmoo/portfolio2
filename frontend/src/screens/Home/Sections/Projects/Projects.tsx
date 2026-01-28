import { useEffect, useState } from "react";
import { getFeaturedProjects } from "../../../../api/projects";
import type { Project } from "../../../../api/types";
import ProjectCard from "./ProjectCard.tsx";
import { ProjectBackground, HrPrimary } from "./Projects.styles.ts";
import { SceneGridWall } from "../Landing/SceneGrid";
import { Canvas } from "@react-three/fiber";
import Pagination from "../../../../components/common/Pagination.tsx";

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);

  useEffect(() => {
    getFeaturedProjects(currentPage).then((response) => {
      setProjects(response.data);
      setLastPage(response.last_page);
    });
  }, [currentPage]);

  return (
    <>
      <ProjectBackground>
        <HrPrimary />
        
        {/* canvas background of lines */}
        <div className="canvas-bg">
          <Canvas>
            <SceneGridWall />
          </Canvas>
        </div>
        <h1>Projecets List</h1>

        {/* list of all projects */}
        <ul>
          {projects.map((project) => (
            <li key={project.id}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>

        {/* pagination */}
        <Pagination
          currentPage={currentPage}
          lastPage={lastPage}
          onPrev={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          onNext={() => setCurrentPage((p) => Math.min(p + 1, lastPage))}
        />

      </ProjectBackground>
    </>
  );
}
