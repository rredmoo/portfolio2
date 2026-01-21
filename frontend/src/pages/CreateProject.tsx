import { useState } from "react"
import { createProject } from "../api/projects";
import AdminLayout from "../components/admin/AdminLayout";
import Sidebar from "../components/admin/Sidebar";
import MainAdminContainer from "../components/admin/MainAdminContainer";

export default function CreateProject(){
    const [project, setProject] = useState({
        title: "",
        description: "",
        technologies_used: [] as string[],
        link: "",
        skills: [] as number[],
        short_description: "",
    });


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const created = await createProject(project);
            console.log(created);
            setProject({title: "", short_description: "", description: "", technologies_used: [], link: "", skills: []});
        } catch (error) {
            console.error(error);
        }
    }

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

    return(
        <>
        <AdminLayout>
        <Sidebar />
        <MainAdminContainer>
          <h1>Create a new project</h1>
          <form onSubmit={handleSubmit}>
            <label>
              Title:
              <input type="text" name="title" value={project.title} onChange={handleChange}/>
            </label>
            <br />

            <label>
              Short Desc:
              <input type="text" name="short_description" value={project.short_description} onChange={handleChange}/>
            </label>
            <br />

            <label>
              description:
              <input type="text" name="description" value={project.description} onChange={handleChange}/>
            </label>
            <br />

            <label>
              Technologies (comma separated):
              <input type="text" name="technologies_used" value={project.technologies_used.join(", ")} onChange={handleChange}/>
            </label>
            <br />

            <label>
              link:
              <input type="text" name="link" value={project.link} onChange={handleChange}/>
            </label>
            <br />

            <button type="submit">Submit</button>
          </form>
        </MainAdminContainer>
      </AdminLayout>
        </>
    )
}