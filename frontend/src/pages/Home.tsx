import { useEffect, useState } from "react";
import { getProjects } from "../api/projects";
import type { Project } from "../api/types";
import ProjectCard from "../components/mainpage/ProjectCard";
import Landing from '../components/mainpage/Landing';


function App() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);

  useEffect(() => {
    getProjects(currentPage).then((response) => {
      setProjects(response.data);
      setLastPage(response.last_page);
    });
  }, [currentPage]);

  return (
    <main className="container">
      <Landing />
      <h1>Projecets List</h1>
      <p>=====================================</p>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
      {/* pagination */}
      <div>
        <button onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))} disabled={currentPage === 1}>Previous</button>

        <span>
          Page {currentPage} of {lastPage}
        </span>

        <button onClick={() => setCurrentPage((p) => Math.min(p + 1, lastPage))} disabled={currentPage === lastPage}>Next</button>
      </div>
    </main>
  );
}

export default App;
