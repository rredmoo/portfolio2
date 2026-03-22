import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MainAdminContainer, AdminLayout } from "../Components/AdminLayout";
import Sidebar from "../Components/Sidebar";
import { getProject, updateProject } from "../../../api/projects";
import type { EditProjectForm, Skill } from "../../../api/types";
import { DtPicker } from 'react-calendar-datetime-picker'
import type { Day } from 'react-calendar-datetime-picker'
import Select from "react-select";
// graph get all skills for select drop down
import { useQuery } from "@apollo/client/react";
import { GET_SKILLS_SELECT } from "../../../api/skills.graphql";

import { FormWrapper, FormField, FormLabel, FormInput, FormTextarea, CheckboxRow, SubmitButton } from "../Components/DataForms.styled";

export default function EditProject() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [project, setProject] = useState<EditProjectForm | null>(null);
  const [loading, setLoading] = useState(true);
  const [date, setDate] = useState<Day | null>(null)

  type SkillsSelectResponse = {
    skillsSelect: Pick<Skill, "id" | "title">[];
  };

  const { data } = useQuery<SkillsSelectResponse>(GET_SKILLS_SELECT);

  type SkillOption = {
    value: number;
    label: string;
  };

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

    const payload = {
      ...project,
      created_at: date
        ? new Date(
          date.year,
          date.month - 1,
          date.day,
          date.hour ?? 0,
          date.minute ?? 0
        ).toISOString()
        : project.created_at,
    };
    await updateProject(Number(id), payload);
    navigate("/admin/projects");
  };

  const optionSkill: SkillOption[] =
    data?.skillsSelect?.map((skill) => ({
      value: Number(skill.id),
      label: skill.title,
    })) ?? [];
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
            <FormLabel>Date And Time</FormLabel>
            <DtPicker
              withTime={true}
              dateFormat="YYYY-MM-DD HH:mm"
              onChange={setDate}
              placeholder={project.created_at}
            />
          </FormField>

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
                    ? {
                      ...prev,
                      skills: (selected ?? []).map((s) => s.value),
                    }
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
