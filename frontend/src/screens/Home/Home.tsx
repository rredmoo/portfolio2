import Resume from './Sections/Resume/Resume';
import Landing from './Sections/Landing/Landing';
import Projects from './Sections/Projects/Projects';
import Skills from './Sections/Skills/Skills';
import Footer from './Components/Footer';


function App() {
  return (
    <main className="container">
      <Landing />
      <Projects />
      <Resume />
      <Skills />
      <Footer />
    </main>
  );
}

export default App;
