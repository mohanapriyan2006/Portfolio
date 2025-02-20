import React from 'react';
import '../styles/Home.css';
import home from '../assets/home.png';

const Home = () => {
  return (
    <div className="home">
        <div className='home-content'>
        <h2>Hello,</h2>
        <h1>I'm Mohanapriyan</h1>
        <p>I'm Full Stack Developer <b>|</b></p>
        <div className='btns'>
            <button className='btn-1'>Let's Talk</button>
            <button className='btn-2'>Download CV</button>
        </div>
        </div>
        <img className='home-img' src={home} alt='landing img'/>
    </div>
  )
}

export default Home