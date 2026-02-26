import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MainAdminContainer, AdminLayout } from "../Components/AdminLayout";
import Sidebar from "../Components/Sidebar";
import { getSkill, updateSkill } from "../../../api/skills";
import type { Skill } from "../../../api/types";
import { FormField, FormInput, FormLabel, FormWrapper, SubmitButton } from "../Components/DataForms.styled";

export default function EditSkill() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [skill, setSkill] = useState<Omit<Skill, "id"> | null>(null);

  useEffect(() => {
    if (!id) return;

    getSkill(Number(id))
      .then((data) => {
        const { id: _, ...rest } = data;
        setSkill(rest);
      })
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

  if (!skill) return <p>Loading skill</p>;

  return (
    <AdminLayout>
      <Sidebar />
      <MainAdminContainer>
        <FormWrapper onSubmit={handleSubmit}>
          <h1>Edit Skill</h1>

          <FormField>
            <FormLabel>Title</FormLabel>
            <FormInput
              name="title"
              value={skill.title}
              onChange={handleChange}
            />
          </FormField>

          <FormField>
            <FormLabel>Category</FormLabel>
            <FormInput
              name="category"
              value={skill.category}
              onChange={handleChange}
            />
          </FormField>

          <FormField>
            <FormLabel>Level</FormLabel>
            <FormInput
              type="number"
              min={1}
              max={5}
              name="level"
              value={skill.level}
              onChange={handleChange}
            />
          </FormField>

          <SubmitButton type="submit">
            Save
          </SubmitButton>
        </FormWrapper>
      </MainAdminContainer>
    </AdminLayout>
  );
}
