import { useEffect, useState } from "react";
import type { Skill } from "../../../../api/types.ts";
import {
  Container,
  H1PrimaryTitle,
} from "../../../../components/common/CommonStyles.ts";
import getSkills from "../../../../api/skills.ts";
import { ProjectBackground } from "../Projects/Projects.styles.ts";
import SkillsCard from "./SkillsCard.tsx";
import { SkillsGrid } from "./Skills.styles.ts";
import Pagination from "../../../../components/common/Pagination.tsx";

export default function Skills() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);

  useEffect(() => {
    getSkills(currentPage).then((response) => {
      setSkills(response.data);
      setLastPage(response.last_page);
    });
  }, [currentPage]);

  return (
    <ProjectBackground>
      <Container>
        <H1PrimaryTitle>
          <h1>Skills List</h1>
        </H1PrimaryTitle>
        <SkillsGrid>
          {skills.map((skill) => (
            <SkillsCard key={skill.id} skill={skill} />
          ))}
        </SkillsGrid>

        <Pagination
          currentPage={currentPage}
          lastPage={lastPage}
          onPrev={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          onNext={() => setCurrentPage((p) => Math.min(p + 1, lastPage))}
        />
      </Container>
    </ProjectBackground>
  );
}
