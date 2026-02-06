import { useState } from "react";
import { MainAdminContainer, AdminLayout } from "../Components/AdminLayout";
import Sidebar from "../Components/Sidebar";
import { createSkill } from "../../../api/skills";

export default function CreateSkill() {
  const [image, setImage] = useState<File | null>(null);
  const [skill, setSkill] = useState({
    title: "",
    category: "",
    level: 1,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("title", skill.title);
    formData.append("category", skill.category);
    formData.append("level", String(skill.level));

    if (image) {
      formData.append("image", image);
    }

    await createSkill(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setSkill((prev) => ({
      ...prev,
      [name]: name === "level" ? Number(value) : value,
    }));
  };

  return (
    <>
      <AdminLayout>
        <Sidebar />
        <MainAdminContainer>
          <h1>Create a new skill</h1>
          <form onSubmit={handleSubmit}>
            <label>
              Title:
              <input
                type="text"
                name="title"
                value={skill.title}
                onChange={handleChange}
              />
            </label>
            <br />

            <label>
              Category:
              <input
                type="text"
                name="category"
                value={skill.category}
                onChange={handleChange}
              />
            </label>
            <br />

            <label>
              Level:
              <input
                type="number"
                name="level"
                value={skill.level}
                onChange={handleChange}
              />
            </label>
            <br />

            <label>
              Skill Image:
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files?.[0] || null)}
              />
            </label>
            <br />

            <button type="submit">Submit</button>
          </form>
        </MainAdminContainer>
      </AdminLayout>
    </>
  );
}
