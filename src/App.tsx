import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Thesis from './components/Thesis'; 
import Timeline from './components/Timeline';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Portfolio />
      <Thesis /> 
      <Timeline />
      <Contact />
    </div>
  );
}

export default App;
