import React, { useState } from 'react'
import logo from '../assets/logo.png';
import github from '../assets/Github.png';
import arrow from '../assets/arrow.png';
import '../styles/Navbar.css';

const Navbar = () => {

  const [activeLink, setActiveLink] = useState('');

  return (
    <nav className='nav-container'>
      <a href='#home'>
        <img src={logo} alt='logo' className='logo' /></a>
      <div className='nav-bar'>
        <ul>
          <a style={{ textDecoration: 'none', color: 'black' }} href='#home'>
            <li className={activeLink === 'home' ? "active-link" : ''} onClick={() => setActiveLink("home")}>Home</li>
          </a>
          <a style={{ textDecoration: 'none', color: 'black' }} href='#about'>
            <li className={activeLink === 'about' ? "active-link" : ''} onClick={() => setActiveLink("about")}>About</li>
          </a>
          <a style={{ textDecoration: 'none', color: 'black' }} href='#projects'>
            <li className={activeLink === 'projects' ? "active-link" : ''} onClick={() => setActiveLink("projects")}>Projects</li>
          </a>
          <a style={{ textDecoration: 'none', color: 'black' }} href='#contact'>
            <li className={activeLink === 'contact' ? "active-link" : ''} onClick={() => setActiveLink("contact")}>Contact</li>
          </a>

        </ul>
      </div>
      <a href='https://github.com/mohanapriyan2006' target='new'>
        <button className='git-btn'>
          <img src={github} alt='icon' className='git-icon' />
          <span>
            GitHub
          </span>
          <img src={arrow} alt='arrow' className='git-arrow' />
        </button>
      </a>
    </nav>
  )
}

export default Navbar