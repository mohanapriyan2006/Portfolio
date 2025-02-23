import React from 'react';
import '../styles/Home.css';
import home from '../assets/home.png';
import resume from '../assets/resume.pdf';

const Home = () => {
  return (
    <div className="home">
      <div className='home-content'>
        <h2>Hello,</h2>
        <h1>I'm Mohanapriyan M</h1>
        <p>I'm Full Stack Developer <b>|</b></p>
        <div className='btns'>
          <a style={{ textDecoration: 'none', color: 'white' }} href='#contact'><button className='btn-1'>Let's Talk</button></a>
          <a style={{ textDecoration: 'none', color: 'white' }} href={resume} target='new'><button className='btn-2'>Download CV</button></a>
        </div>
      </div>
      <img className='home-img' src={home} alt='landing img' />
    </div>
  )
}

export default Home;