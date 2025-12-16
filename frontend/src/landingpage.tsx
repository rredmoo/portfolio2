import { useEffect, useState } from 'react'
import './App.css'
import { getProjects } from './api/projects'
import type { Project } from './api/types';

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

      <ul>
        {projects.map(project => (
          <li key={project.id}>
            <h3>{project.title}</h3>
            <p>{project.small_description}</p>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default App
