import { useState } from "react";
import { MainAdminContainer, AdminLayout } from "../Components/AdminLayout";
import Sidebar from "../Components/Sidebar";
import { createSkill } from "../../../api/skills";

export default function CreateSkill() {
  const [skill, setSkill] = useState({
    title: "",
    category: "",
    level: 1,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const created = await createSkill(skill);
      console.log(created);

      setSkill({ title: "", category: "", level: 1 });
    } catch (error) {
      console.error(error);
    }
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
              <input type="text" name="title" value={skill.title} onChange={handleChange}/>
            </label>
            <br />

            <label>
              Category:
              <input type="text" name="category" value={skill.category} onChange={handleChange}/>
            </label>
            <br />

            <label>
              Level:
              <input type="number" name="level" value={skill.level} onChange={handleChange}/>
            </label>
            <br />

            <button type="submit">Submit</button>
          </form>
        </MainAdminContainer>
      </AdminLayout>
    </>
  );
}
