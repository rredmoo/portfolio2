import { useState } from "react";
import { MainAdminContainer, AdminLayout } from "../Components/AdminLayout";
import Sidebar from "../Components/Sidebar";
import { createSkill } from "../../../api/skills";
import { FormField, FormInput, FormLabel, FormWrapper, SubmitButton } from "../Components/DataForms.styled";
import { useNavigate } from "react-router-dom";

export default function CreateSkill() {
  const [image, setImage] = useState<File | null>(null);
  const [skill, setSkill] = useState({
    title: "",
    category: "",
    level: 1,
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

    await createSkill(formData);
    navigate("/admin/skills");
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

            <SubmitButton type="submit">
              Submit
            </SubmitButton>
          </FormWrapper>
        </MainAdminContainer>
      </AdminLayout>
    </>
  );
}
