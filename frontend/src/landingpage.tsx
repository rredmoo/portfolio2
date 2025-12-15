import { useEffect } from 'react'
import './App.css'
import { getProjects } from './api/projects'

function App() {
  useEffect(() => {
    getProjects(1).then(data => {
      console.log('[debug] Api fetched projects', data)
    });
  }, []);

  return <h1>hello</h1>
}

export default App
