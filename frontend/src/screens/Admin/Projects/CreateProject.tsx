import { useEffect, useState } from "react";
import { createProject } from "../../../api/projects";
import AdminLayout from "../Components/AdminLayout";
import Sidebar from "../Components/Sidebar";
import MainAdminContainer from "../../../components/admin/MainAdminContainer";
import Select from "react-select";
import getSkills from "../../../api/skills";
import type { Skill } from "../../../api/types";

export default function CreateProject() {
  const [project, setProject] = useState({
    title: "",
    short_description: "",
    description: "",
    technologies_used: [] as string[],
    link: "",
    skills: [] as number[],
  });

  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    getSkills().then((res) => setSkills(res.data));
  }, []);

  const optionSkill = skills.map((skill) => ({
    value: skill.id,
    label: skill.title,
  }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const created = await createProject(project);
      console.log(created);
      setProject({
        title: "",
        short_description: "",
        description: "",
        technologies_used: [],
        link: "",
        skills: [],
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setProject((prev) => ({
      ...prev,
      [name]:
        name === "technologies_used"
          ? value.split(",").map((t) => t.trim()) // #TODO replace with technologies model, for now commas
          : value,
    }));
  };

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
              Technologies (comma separated):
              <input
                type="text"
                name="technologies_used"
                value={project.technologies_used.join(", ")}
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
