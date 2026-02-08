import { useState } from "react";
import { useQuery } from "@apollo/client/react";
// types
import type { Skill } from "../../../../api/types";
// styles & components
import {
  Container,
  H1PrimaryTitle,
} from "../../../../components/common/CommonStyles";
import { ProjectBackground } from "../Projects/Projects.styles";
import SkillsCard from "./SkillsCard";
import { SkillsGrid } from "./Skills.styles";
import Pagination from "../../../../components/common/Pagination";
// graphql getters
import { GET_SKILLS } from "../../../../api/skills.graphql";

type SkillsQueryResponse = { // response structure 
  skills: {
    data: Skill[];
    paginatorInfo: {
      currentPage: number;
      lastPage: number;
    };
  };
};

export default function Skills() {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, loading, error } = useQuery<SkillsQueryResponse>(GET_SKILLS, {
    variables: { first: 8, page: currentPage },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading skills</p>;
  if (!data) return null;
  
  const skills = data.skills.data;
  const lastPage = data.skills.paginatorInfo.lastPage;

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
