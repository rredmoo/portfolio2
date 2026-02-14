// imported libs
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useQuery } from "@apollo/client/react";
// components
import { MainAdminContainer, AdminLayout } from "../Components/AdminLayout";
import Sidebar from "../Components/Sidebar";
import DataTable from "../Components/DataTable";
import { Icon } from "../Components/Sidebar";
import Pagination from "../../../components/common/Pagination";
// api
// import getSkills from "../../../api/skills";
import { GET_SKILLS } from "../../../api/skills.graphql";
import type { Skill } from "../../../api/types";
import { useMutation } from "@apollo/client/react";
import { DELETE_SKILL } from "../../../api/skills.graphql";

import { BtnAction, DataTableActionContainer } from "../Components/BtnAction";
import Loadable from "../../../components/common/Loadable";

type SkillsQueryResponse = {
  skills: {
    data: Skill[];
    paginatorInfo: {
      currentPage: number;
      lastPage: number;
    };
  };
};

export default function AdminSkills() {
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  // const [loading, setLoading] = useState(true);

  // graphql fetch
  const { data, loading, error } = useQuery<SkillsQueryResponse>(GET_SKILLS, {
    variables: { first: 3, page: currentPage },
  });

  const [deleteSkillMutation] = useMutation(DELETE_SKILL);
  const handleDelete = async (id: number) => {
    await deleteSkillMutation({
      variables: { id },
      refetchQueries: [GET_SKILLS],
    });
  };
  
  if (loading) return <p>loading</p>;
  if (error) {
    console.log(error);
    return <p>DEBUG: Error loading projects</p>;
  }

  const skills = data?.skills.data ?? [];
  const lastPage = data?.skills.paginatorInfo.lastPage ?? 1;


  const navCreateSkillURL = "/admin/create/skill";
  return (
    <>
      <AdminLayout>
        <Sidebar />
        <MainAdminContainer>
          <h1>Skills Panel</h1>
          <DataTableActionContainer>
            <BtnAction onClick={() => navigate(navCreateSkillURL)}>
              <Icon icon={faPlus} />
            </BtnAction>
          </DataTableActionContainer>
          <Loadable loading={loading}>
            <DataTable
              data={skills}
              editPath={(skill) => `/admin/skills/${skill.id}/edit`}
              onDelete={handleDelete}
            />
            <Pagination
              currentPage={currentPage}
              lastPage={lastPage}
              onPrev={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              onNext={() => setCurrentPage((p) => Math.min(p + 1, lastPage))}
            />
          </Loadable>
        </MainAdminContainer>
      </AdminLayout>
    </>
  );
}
