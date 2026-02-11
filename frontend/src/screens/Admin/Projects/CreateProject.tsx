import { useEffect, useState } from "react";
import { createProject } from "../../../api/projects";
import { MainAdminContainer, AdminLayout } from "../Components/AdminLayout";
import Sidebar from "../Components/Sidebar";
import Select from "react-select";
import getSkills from "../../../api/skills";
import type { Skill } from "../../../api/types";
import {
  CheckboxRow,
  FormField,
  FormInput,
  FormLabel,
  FormTextarea,
  FormWrapper,
  SubmitButton,
} from "../Components/DataForms.styled";

export default function CreateProject() {
  // states
  const [project, setProject] = useState({
    title: "",
    short_description: "",
    description: "",
    link: "",
    is_featured: false,
    skills: [] as number[],
  });
  const [skills, setSkills] = useState<Skill[]>([]);
  const [image, setImage] = useState<File | null>(null);

  const optionSkill = skills.map((skill) => ({
    value: skill.id,
    label: skill.title,
  }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("title", project.title);
    formData.append("short_description", project.short_description);
    formData.append("description", project.description);
    formData.append("link", project.link);
    formData.append("is_featured", project.is_featured ? "1" : "0"); // because laravel is using bool instead of boolean, so it want 1/0

    project.skills.forEach((id) => formData.append("skills[]", String(id)));

    if (image) {
      formData.append("image", image);
    }

    await createProject(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setProject((prev) => ({
      ...prev,
      [name]:
        e.target instanceof HTMLInputElement && e.target.type === "checkbox"
          ? e.target.checked
          : value,
    }));
  };

  useEffect(() => {
    getSkills().then((res) => setSkills(res.data));
  }, []);
  return (
    <>
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
                onChange={(e) => setImage(e.target.files?.[0] || null)}
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
                    skills: selected.map((s) => s.value),
                  }))
                }
              />
            </FormField>

            <SubmitButton type="submit">Submit</SubmitButton>
          </FormWrapper>
        </MainAdminContainer>
      </AdminLayout>
    </>
  );
}
