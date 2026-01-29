import { useEffect, useState } from "react";
import { createProject } from "../../../api/projects";
import AdminLayout from "../Components/AdminLayout";
import Sidebar from "../Components/Sidebar";
import MainAdminContainer from "../Components/MainAdminContainer";
import Select from "react-select";
import getSkills from "../../../api/skills";
import type { Skill } from "../../../api/types";

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
    // Testing out formData insstead of the old api
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    setProject((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
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
          <h1>Create a new project</h1>
          <form onSubmit={handleSubmit}>
            <label>
              Title:
              <input
                type="text"
                name="title"
                value={project.title}
                onChange={handleChange}
              />
            </label>
            <br />

            <label>
              Short Desc:
              <input
                type="text"
                name="short_description"
                value={project.short_description}
                onChange={handleChange}
              />
            </label>
            <br />

            <label>
              description:
              <input
                type="text"
                name="description"
                value={project.description}
                onChange={handleChange}
              />
            </label>
            <br />

            <label>
              link:
              <input
                type="text"
                name="link"
                value={project.link}
                onChange={handleChange}
              />
            </label>
            <br />

            <label>
              Feature it in portfolio?
              <input
                type="checkbox"
                name="is_featured"
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Project Image:
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files?.[0] || null)}
              />
            </label>
            <br />
            <label>Skills:</label>
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

            <button type="submit">Submit</button>
          </form>
        </MainAdminContainer>
      </AdminLayout>
    </>
  );
}
