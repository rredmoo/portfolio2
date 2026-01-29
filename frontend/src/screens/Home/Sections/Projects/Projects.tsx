import { useEffect, useState } from "react";
import { getFeaturedProjects } from "../../../../api/projects";
import type { Project } from "../../../../api/types";
import ProjectCard from "./ProjectCard.tsx";
import {
  AllProjects,
  ProjectBackground,
} from "./Projects.styles.ts";
import { SceneGridWall } from "../Landing/SceneGrid";
import { Canvas } from "@react-three/fiber";
import Pagination from "../../../../components/common/Pagination.tsx";
import {
  Container,
  HrPrimary,
} from "../../../../components/common/CommonStyles.ts";

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
        <Container>
          <AllProjects>
            {projects.map((project) => (
              <ProjectCard project={project}/>
            ))}
          </AllProjects>
        </Container>

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
