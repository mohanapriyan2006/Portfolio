import { useEffect, useState } from 'react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import { SkeletonTheme } from 'react-loading-skeleton';

function App() {

  const [loading, setLoading] = useState(true);
  

    useEffect(() => {
      const timer = setTimeout(() => setLoading(false), 2000); // fake delay
      return () => clearTimeout(timer);
    }, []);
  

  return (
    <div className="App">
      <SkeletonTheme baseColor="#e0eafa" highlightColor="#87b8f5">

      
      <section id='home'>
      <Navbar />
        <Home loading={loading} />
      </section>

      <section id='about'>
        <About loading={loading} />
      </section>

      <section id='projects'>
        <Projects loading={loading} />
      </section>

      <section id='contact'>
        <Contact loading={loading} />
      </section>


      <Footer />

      </SkeletonTheme>
    </div>
  );
}

export default App;
