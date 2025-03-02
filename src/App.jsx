import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">

      
      <section id='home'>
      <Navbar />
        <Home />
      </section>

      <section id='about'>
        <About />
      </section>

      <section id='projects'>
        <Projects />
      </section>

      <section id='contact'>
        <Contact />
      </section>


      <Footer />
    </div>
  );
}

export default App;
