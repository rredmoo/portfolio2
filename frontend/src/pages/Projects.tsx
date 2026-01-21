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
import getProjects from "../api/projects";
import type { Project } from "../api/types";
import { deleteProject } from "../api/projects";

import {
    BtnAction,
    DataTableActionContainer,
} from "../components/admin/BtnAction";

export default function Projects() {

    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        getProjects().then((res) => setProjects(res.data));
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
                    <DataTable
                        data={projects}
                        editPath={(project) => `/admin/projects/${project.id}/edit`}
                        onDelete={handleDelete}
                    />
                </MainAdminContainer>
            </AdminLayout>
        </>
    );
}