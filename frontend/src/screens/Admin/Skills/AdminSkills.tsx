// imported libs
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
// components
import MainAdminContainer from "../Components/MainAdminContainer";
import AdminLayout from "../Components/AdminLayout";
import Sidebar from "../Components/Sidebar";
import DataTable from "../Components/DataTable";
import { Icon } from "../Components/Sidebar";
// api
import getSkills from "../../../api/skills";
import type { Skill } from "../../../api/types";
import { deleteSkill } from "../../../api/skills";

import {
  BtnAction,
  DataTableActionContainer,
} from "../Components/BtnAction";
import Loadable from "../../../components/common/Loadable";

export default function Skills() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadSkills = async () => {
      try {
        const res = await getSkills();
        setSkills(res.data);
      } finally {
        setLoading(false);
      }
    };

    loadSkills();
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
          <Loadable loading={loading}>
            <DataTable
              data={skills}
              editPath={(skill) => `/admin/skills/${skill.id}/edit`}
              onDelete={handleDelete}
            />
          </Loadable>
        </MainAdminContainer>
      </AdminLayout>
    </>
  );
}
