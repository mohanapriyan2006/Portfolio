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
        <li><a style={{textDecoration: 'none',color: 'black'}} href='#home'>Home</a></li>
        <li><a style={{textDecoration: 'none',color: 'black'}} href='#about'>About</a></li>
        <li><a style={{textDecoration: 'none',color: 'black'}} href='#projects'>Projects</a></li>
        <li><a style={{textDecoration: 'none',color: 'black'}} href='#contact'>Contact</a></li>

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