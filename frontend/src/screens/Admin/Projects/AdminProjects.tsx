import { useMutation, useQuery } from "@apollo/client/react";
import { useNavigate } from "react-router-dom";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import { MainAdminContainer, AdminLayout } from "../Components/AdminLayout";
import Sidebar from "../Components/Sidebar";
import DataTable from "../Components/DataTable";
import { Icon } from "../Components/Sidebar";

import type { Project } from "../../../api/types";
import {
  DELETE_PROJECT,
  GET_PROJECTS,
  GET_PROJECTS_ADMIN,
} from "../../../api/projects.graphql";

import { BtnAction, DataTableActionContainer } from "../Components/BtnAction";
import Loadable from "../../../components/common/Loadable";
import { useState } from "react";
import Pagination from "../../../components/common/Pagination";

type ProjectsQueryResponse = {
  projects: {
    data: Project[];
    paginatorInfo: {
      currentPage: number;
      lastPage: number;
    };
  };
};

export default function AdminProjects() {
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const [deleteSkillMutation] = useMutation(DELETE_PROJECT);
  const handleDelete = async (id: number) => {
    await deleteSkillMutation({
      variables: { id },
      refetchQueries: [GET_PROJECTS],
    });
  };
  
  // graphql fetch
  const { data, loading, error } = useQuery<ProjectsQueryResponse>(
    GET_PROJECTS_ADMIN,
    {
      variables: { first: 8, page: currentPage },
    },
  );

  if (error) {
    console.log(error);
    return <p>Error loading projects</p>;
  }
  const projects = data?.projects.data ?? [];
  const lastPage = data?.projects.paginatorInfo.lastPage ?? 1;

  return (
    <AdminLayout>
      <Sidebar />

      <MainAdminContainer>
        <h1>Projects Panel</h1>

        <DataTableActionContainer>
          <BtnAction onClick={() => navigate("/admin/create/project")}>
            <Icon icon={faPlus} />
          </BtnAction>
        </DataTableActionContainer>

        <Loadable loading={loading}>
          <DataTable
            data={projects}
            editPath={(project) => `/admin/projects/${project.id}/edit`}
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
  );
}
