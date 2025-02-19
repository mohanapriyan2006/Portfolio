import React from 'react'
import logo from '../assets/logo.png';
import github from '../assets/Github.png';
import arrow from '../assets/arrow.png';

const Navbar = () => {
  return (
    <header>
        <img src={logo} alt='logo' />
        <nav>
            <p>Home</p>
            <p>About</p>
            <p>Projects</p>
            <p>Contact</p>
        </nav>
        <button>
            <img src={github} alt='icon'/>
            GitHub
            <img src={arrow} alt='arrow'/>
            </button>
    </header>
  )
}

export default Navbar