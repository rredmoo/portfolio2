import { useEffect, useState } from 'react'
import './App.css'
import { getProjects } from './api/projects'
import type { Project } from './api/types';
import ProjectCard from './components/ProjectCard';

function App() {
  const [projects, setprojects] = useState<Project[]>([]);

  useEffect(() => {
    getProjects(1).then(response => {
      setprojects(response.data)
    });
  }, []);

  return (
        <main className="container">
      <h1>Projecets</h1>
      <p>=====================================</p>
      <ul>
        {projects.map(project => (
          <li key={project.id}>
            <ProjectCard project={project}/>
          </li>
        ))}

      </ul>
      
    </main>
  )
}

export default App
