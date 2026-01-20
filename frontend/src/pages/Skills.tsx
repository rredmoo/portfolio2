// imported libs
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
// components
import MainAdminContainer from "../components/admin/MainAdminContainer";
import AdminLayout from "../components/admin/AdminLayout";
import Sidebar from "../components/admin/Sidebar";
import DataTable from "../components/admin/DataTable";
import { Icon } from "../components/admin/Sidebar";
// api
import getSkills from "../api/skills";
import type { Skill } from "../api/types";
import { deleteSkill } from "../api/skills";

import {
  BtnAction,
  DataTableActionContainer,
} from "../components/admin/BtnAction";

export default function Skills() {
  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    getSkills().then((res) => setSkills(res.data));
  }, []);

  const handleDelete = async (id: number) => {
    await deleteSkill(id);
    setSkills((prev) => prev.filter((s) => s.id !== id));
  };

  const navigate = useNavigate();
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
          <DataTable
            data={skills}
            editPath={(skill) => `/admin/skills/${skill.id}/edit`}
            onDelete={handleDelete}
          />
        </MainAdminContainer>
      </AdminLayout>
    </>
  );
}
