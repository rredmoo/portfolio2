import { useState } from "react";
import { MainAdminContainer, AdminLayout } from "../Components/AdminLayout";
import Sidebar from "../Components/Sidebar";
import { createSkill } from "../../../api/skills";
import { CheckboxRow, FormField, FormInput, FormLabel, FormWrapper, SubmitButton } from "../Components/DataForms.styled";
import { useNavigate } from "react-router-dom";

export default function CreateSkill() {
  const [image, setImage] = useState<File | null>(null);
  const [skill, setSkill] = useState({
    title: "",
    category: "",
    level: 1,
    is_featured: false,
  });

  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("title", skill.title);
    formData.append("category", skill.category);
    formData.append("level", String(skill.level));

    if (image) {
      formData.append("image", image);
    }

    formData.append("is_featured", skill.is_featured ? "1" : "0");

    await createSkill(formData);
    navigate("/admin/skills");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    setSkill((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : name === "level"
            ? Number(value)
            : value,
    }));
  };

  return (
    <>
      <AdminLayout>
        <Sidebar />
        <MainAdminContainer>
          <FormWrapper onSubmit={handleSubmit}>
            <h1>Create a new skill</h1>

            <FormField>
              <FormLabel>Title</FormLabel>
              <FormInput
                type="text"
                name="title"
                value={skill.title}
                onChange={handleChange}
              />
            </FormField>

            <FormField>
              <FormLabel>Category</FormLabel>
              <FormInput
                type="text"
                name="category"
                value={skill.category}
                onChange={handleChange}
              />
            </FormField>

            <FormField>
              <FormLabel>Level</FormLabel>
              <FormInput
                type="number"
                name="level"
                value={skill.level}
                onChange={handleChange}
              />
            </FormField>

            <FormField>
              <FormLabel>Skill Image</FormLabel>
              <FormInput
                type="file"
                accept="image/*"
                onChange={(e) =>
                  setImage(e.target.files?.[0] || null)
                }
              />
            </FormField>

            <CheckboxRow>
              <input
                type="checkbox"
                name="is_featured"
                checked={skill.is_featured}
                onChange={handleChange}
              />
              <FormLabel>Feature it?</FormLabel>
            </CheckboxRow>

            <SubmitButton type="submit">
              Submit
            </SubmitButton>
          </FormWrapper>
        </MainAdminContainer>
      </AdminLayout>
    </>
  );
}
