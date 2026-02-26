import { useState } from "react";
import { useQuery } from "@apollo/client/react";
import Select from "react-select";
import { useNavigate } from "react-router-dom";

import { createProject } from "../../../api/projects";
import { GET_SKILLS_SELECT } from "../../../api/skills.graphql";
import type { Skill } from "../../../api/types";

import { MainAdminContainer, AdminLayout } from "../Components/AdminLayout";
import Sidebar from "../Components/Sidebar";
import {
  CheckboxRow,
  FormField,
  FormInput,
  FormLabel,
  FormTextarea,
  FormWrapper,
  SubmitButton,
} from "../Components/DataForms.styled";

type SkillsSelectResponse = {
  skillsSelect: Pick<Skill, "id" | "title">[];
};

type SkillOption = { value: number; label: string };

export default function CreateProject() {
  const [project, setProject] = useState({
    title: "",
    short_description: "",
    description: "",
    link: "",
    is_featured: false,
    skills: [] as number[],
  });

  const { data } = useQuery<SkillsSelectResponse>(GET_SKILLS_SELECT);

  const [image, setImage] = useState<File | null>(null);
  const navigate = useNavigate();

  const optionSkill: SkillOption[] =
    data?.skillsSelect?.map((skill) => ({
      value: Number(skill.id),
      label: skill.title,
    })) ?? [];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", project.title);
    formData.append("short_description", project.short_description);
    formData.append("description", project.description);
    formData.append("link", project.link);
    formData.append("is_featured", project.is_featured ? "1" : "0");

    project.skills.forEach((id) =>
      formData.append("skills[]", String(id))
    );

    if (image) formData.append("image", image);

    await createProject(formData);
    navigate("/admin/projects");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setProject((prev) => ({
      ...prev,
      [name]:
        e.target instanceof HTMLInputElement &&
        e.target.type === "checkbox"
          ? e.target.checked
          : value,
    }));
  };

  return (
    <AdminLayout>
      <Sidebar />
      <MainAdminContainer>
        <FormWrapper onSubmit={handleSubmit}>
          <h1>Create a new project</h1>

          <FormField>
            <FormLabel>Title</FormLabel>
            <FormInput
              type="text"
              name="title"
              value={project.title}
              onChange={handleChange}
            />
          </FormField>

          <FormField>
            <FormLabel>Short Desc</FormLabel>
            <FormInput
              type="text"
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
            <FormLabel>Link</FormLabel>
            <FormInput
              type="text"
              name="link"
              value={project.link}
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
            <FormLabel>Feature it?</FormLabel>
          </CheckboxRow>

          <FormField>
            <FormLabel>Project Image</FormLabel>
            <FormInput
              type="file"
              accept="image/*"
              onChange={(e) =>
                setImage(e.target.files?.[0] || null)
              }
            />
          </FormField>

          <FormField>
            <FormLabel>Skills</FormLabel>
            <Select
              isMulti
              options={optionSkill}
              placeholder="Search skills..."
              onChange={(selected) =>
                setProject((prev) => ({
                  ...prev,
                  skills: (selected ?? []).map((s) => s.value),
                }))
              }
            />
          </FormField>

          <SubmitButton type="submit">Submit</SubmitButton>
        </FormWrapper>
      </MainAdminContainer>
    </AdminLayout>
  );
}