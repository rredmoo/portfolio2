import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AdminLayout from "../components/admin/AdminLayout";
import MainAdminContainer from "../components/admin/MainAdminContainer";
import Sidebar from "../components/admin/Sidebar";
import { getSkill, updateSkill } from "../api/skills";
import type { Skill } from "../api/types";

export default function EditSkill() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [skill, setSkill] = useState<Omit<Skill, "id"> | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    getSkill(Number(id))
      .then((data) => {
        const { id: _, ...rest } = data;
        setSkill(rest);
      })
      .finally(() => setLoading(false));
  }, [id]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    setSkill((prev) =>
      prev
        ? {
            ...prev,
            [name]: name === "level" ? Number(value) : value,
          }
        : prev,
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!id || !skill) return;

    await updateSkill(Number(id), skill);
    navigate("/admin/skills");
  };

  if (loading) return <p>DEBUG: loading...</p>;
  if (!skill) return <p>DEBUG: Skill not found</p>;

  return (
    <AdminLayout>
      <Sidebar />
      <MainAdminContainer>
        <h1>Edit Skill</h1>

        <form onSubmit={handleSubmit}>
          <input name="title" value={skill.title} onChange={handleChange} />

          <select name="category" value={skill.category} onChange={handleChange}>
            <option value="frontend">frontend</option>
            <option value="backend">backend</option>
          </select>

          <input type="number" name="level" min={1} max={5} value={skill.level} onChange={handleChange}/>
          <button type="submit">Save</button>
        </form>
      </MainAdminContainer>
    </AdminLayout>
  );
}
