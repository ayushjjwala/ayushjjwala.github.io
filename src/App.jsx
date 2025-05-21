import Navbar from './components/Navbar';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-16">
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
        <Resume />
      </main>
    </div>
  );
}

export default App;
