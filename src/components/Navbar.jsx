import React from 'react'
import logo from '../assets/logo.png';
import github from '../assets/Github.png';
import arrow from '../assets/arrow.png';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className='nav-container'>
      <a href='#home'>
      <img src={logo} alt='logo' className='logo' /></a>
      <div className='nav-bar'>
        <ul>
        <a style={{textDecoration: 'none',color: 'black'}} href='#home'><li>Home</li></a>
        <a style={{textDecoration: 'none',color: 'black'}} href='#about'><li>About</li></a>
        <a style={{textDecoration: 'none',color: 'black'}} href='#projects'><li>Projects</li></a>
        <a style={{textDecoration: 'none',color: 'black'}} href='#contact'><li>Contact</li></a>

        </ul>
      </div>
      <a href='https://github.com/mohanapriyan2006' target='new'>
      <button className='git-btn'>
        <img src={github} alt='icon' className='git-icon' />
        <span>
        GitHub
        </span>
        <img src={arrow} alt='arrow' className='git-arrow'/>
      </button>
      </a>
    </nav>
  )
}

export default Navbar