import { useEffect, useState } from 'react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import { SkeletonTheme } from 'react-loading-skeleton';
import Service from './components/Service';
import Welcome from './components/Welcome';
import Confetti from 'react-confetti';

function App() {


  const [loading, setLoading] = useState(true);

  const [isTab, setIsTab] = useState(false);

  const [isCelebrating, setIsCelebrating] = useState(false);

  // Trigger celebration when the component is mounted (simulating a celebration)
  useEffect(() => {
    setTimeout(() => {
      setIsCelebrating(true);
    }, 500); // Delay the celebration by 500ms
  }, []);


  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // fake delay
    return () => clearTimeout(timer);
  }, []);



  return (
    <div className="App">
      <SkeletonTheme baseColor="#e0eafa" highlightColor="#87b8f5">

        {(isCelebrating && !isTab)? <div className="confetti"><Confetti /></div> : null}

        <section id='home'>
          <Navbar />
          <Home loading={loading} />
        </section>

        <section id='about'>
          <About loading={loading} />
        </section>

        <section id='service'>
          <Service loading={loading} />
        </section>

        <section id='projects'>
          <Projects loading={loading} />
        </section>

        <section id='contact'>
          <Contact loading={loading} />
        </section>


        {!isTab ? <Welcome setIsTab={setIsTab} /> : null}


        <Footer />

      </SkeletonTheme>
    </div>
  );
}

export default App;
