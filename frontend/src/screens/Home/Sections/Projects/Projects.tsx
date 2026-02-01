import { useEffect, useState } from "react";
import { getFeaturedProjects } from "../../../../api/projects";
import type { Project } from "../../../../api/types";
import ProjectCard from "./ProjectCard.tsx";
import {
  ProjectsGrid,
  RightColumn,
  FeaturedCard,
  ProjectBackground,
} from "./Projects.styles.ts";
import { SceneGridWall } from "../Landing/SceneGrid";
import { Canvas } from "@react-three/fiber";
import Pagination from "../../../../components/common/Pagination.tsx";
import {
  Container,
  HrPrimary,
  H1PrimaryTitle,
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

        {/* list of all projects */}
        <Container>
          <H1PrimaryTitle>
            <h1>Projecets List</h1>
          </H1PrimaryTitle>
          <ProjectsGrid>
            <FeaturedCard>
              {projects[0] && <ProjectCard project={projects[0]} type="left" />}
              {/* pagination */}
              <Pagination
                currentPage={currentPage}
                lastPage={lastPage}
                onPrev={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                onNext={() => setCurrentPage((p) => Math.min(p + 1, lastPage))}
              />
            </FeaturedCard>
            <RightColumn>
              {projects
                .slice(1, 3)
                .map((p) =>
                  p ? <ProjectCard key={p.id} project={p} /> : null,
                )}
            </RightColumn>
          </ProjectsGrid>
        </Container>
      </ProjectBackground>
    </>
  );
}
