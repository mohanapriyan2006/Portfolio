import React from 'react'
import logo from '../assets/logo.png';
import github from '../assets/Github.png';
import arrow from '../assets/arrow.png';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className='nav-container'>
      <img src={logo} alt='logo' className='logo' />
      <div className='nav-bar'>
        <ul>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>

        </ul>
      </div>
      <button className='git-btn'>
        <img src={github} alt='icon' className='git-icon' />
        <span>
        GitHub
        </span>
        <img src={arrow} alt='arrow' className='git-arrow'/>
      </button>
    </nav>
  )
}

export default Navbar