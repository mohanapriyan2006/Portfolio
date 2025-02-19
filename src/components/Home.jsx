import React from 'react';
import home from '../assets/home.png';

const Home = () => {
  return (
    <div>
        <div>
        <h2>Hello,</h2>
        <h1>I'm Mohanapriyan</h1>
        <p>I'm Full Stack Developer</p>
        <div>
            <button>Let's Talk</button>
            <button>Download CV</button>
        </div>
        </div>
        <img src={home} alt='landing img'/>
    </div>
  )
}

export default Home