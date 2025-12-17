import './App.css';
import About from './components/About';
import Experience from './components/Experience';
import Navbar from './components/Navbar';
import Projects from './components/Projects';

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Experience />
      <Projects />
    </div>
  );
}

export default App;
