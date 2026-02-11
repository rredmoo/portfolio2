import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MainAdminContainer, AdminLayout } from "../Components/AdminLayout";
import Sidebar from "../Components/Sidebar";
import { getProject, updateProject } from "../../../api/projects";
import type { EditProjectForm, Skill } from "../../../api/types";
import Select from "react-select";
import getSkills from "../../../api/skills";
import { FormWrapper, FormField, FormLabel, FormInput, FormTextarea, CheckboxRow, SubmitButton } from "../Components/DataForms.styled";

export default function EditProject() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [project, setProject] = useState<EditProjectForm | null>(null);
  const [loading, setLoading] = useState(true);
  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    getSkills().then((res) => setSkills(res.data));
  }, []);

  useEffect(() => {
    if (!id) return;

    getProject(Number(id))
      .then(({ skills, ...rest }) => {
        setProject({
          ...rest,
          skills: skills.map((s) => s.id),
        });
      })
      .finally(() => setLoading(false));
  }, [id]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;

    setProject((prev) =>
      prev
        ? {
            ...prev,
            [name]: type === "checkbox" ? checked : value,
          }
        : prev,
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!id || !project) return;

    await updateProject(Number(id), project);
    navigate("/admin/projects");
  };

  const optionSkill = skills.map((skill) => ({
    value: skill.id,
    label: skill.title,
  }));
  if (loading) return <p>Loading...</p>;
  if (!project) return <p>Project not found</p>;

  return (
    <AdminLayout>
      <Sidebar />
      <MainAdminContainer>
        <h1>Edit Project</h1>

        <FormWrapper onSubmit={handleSubmit}>
          <FormField>
            <FormLabel>Title</FormLabel>
            <FormInput
              name="title"
              value={project.title}
              onChange={handleChange}
            />
          </FormField>

          <FormField>
            <FormLabel>Short Description</FormLabel>
            <FormInput
              name="short_description"
              value={project.short_description}
              onChange={handleChange}
            />
          </FormField>

          <FormField>
            <FormLabel>Description</FormLabel>
            <FormTextarea
              name="description"
              value={project.description}
              onChange={handleChange}
            />
          </FormField>

          <FormField>
            <FormLabel>Project Link</FormLabel>
            <FormInput
              name="link"
              value={project.link ?? ""}
              onChange={handleChange}
            />
          </FormField>

          <CheckboxRow>
            <input
              type="checkbox"
              name="is_featured"
              checked={project.is_featured}
              onChange={handleChange}
            />
            <FormLabel>Feature in portfolio?</FormLabel>
          </CheckboxRow>

          <FormField>
            <FormLabel>Skills</FormLabel>
            <Select
              isMulti
              options={optionSkill}
              value={optionSkill.filter((o) =>
                project.skills.includes(o.value),
              )}
              placeholder="Search skills..."
              onChange={(selected) =>
                setProject((prev) =>
                  prev
                    ? { ...prev, skills: selected.map((s) => s.value) }
                    : prev,
                )
              }
            />
          </FormField>

          <SubmitButton type="submit">Save Changes</SubmitButton>
        </FormWrapper>
      </MainAdminContainer>
    </AdminLayout>
  );
}
