// imported libs
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
// components
import { MainAdminContainer, AdminLayout } from "../Components/AdminLayout";
import Sidebar from "../Components/Sidebar";
import DataTable from "../Components/DataTable";
import { Icon } from "../Components/Sidebar";
// api
import { getProjects } from "../../../api/projects";
import type { Project } from "../../../api/types";
import { deleteProject } from "../../../api/projects";

import {
  BtnAction,
  DataTableActionContainer,
} from "../Components/BtnAction";
import Loadable from "../../../components/common/Loadable";

export default function AdminProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const res = await getProjects();
        setProjects(res.data);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  const handleDelete = async (id: number) => {
    await deleteProject(id);
    setProjects((prev) => prev.filter((s) => s.id !== id));
  };

  const navigate = useNavigate();
  const navCreateProjectURL = "/admin/create/project";
  return (
    <>
      <AdminLayout>
        <Sidebar />
        <MainAdminContainer>
          <h1>Projects Panel</h1>
          <DataTableActionContainer>
            <BtnAction onClick={() => navigate(navCreateProjectURL)}>
              <Icon icon={faPlus} />
            </BtnAction>
          </DataTableActionContainer>
          <Loadable loading={loading}>
            <DataTable
              data={projects}
              editPath={(project) => `/admin/projects/${project.id}/edit`}
              onDelete={handleDelete}
            />
          </Loadable>
        </MainAdminContainer>
      </AdminLayout>
    </>
  );
}
