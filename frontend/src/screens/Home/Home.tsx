import Resume from './Sections/Resume/Resume';
import Landing from './Sections/Landing/Landing';
import Projects from './Sections/Projects/Projects';


function App() {
  return (
    <main className="container">
      <Landing />
      <Projects />
      <Resume />
    </main>
  );
}

export default App;
