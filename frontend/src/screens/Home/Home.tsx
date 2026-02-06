import Resume from './Sections/Resume/Resume';
import Landing from './Sections/Landing/Landing';
import Projects from './Sections/Projects/Projects';
import Skills from './Sections/Skills/Skills';


function App() {
  return (
    <main className="container">
      <Landing />
      <Projects />
      <Resume />
      <Skills />
    </main>
  );
}

export default App;
