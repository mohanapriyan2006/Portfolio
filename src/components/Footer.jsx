import React from 'react';
import '../styles/Footer.css';
import logo from '../assets/logo2.png';
import linkedin from '../assets/linkedin.png';
import git from '../assets/github-light.png';
import mail from '../assets/email2.png';

const Footer = () => {
  return (
    <footer>
      <div>
        <a href='#home'>
          <img style={{ height: '20px', width: '75px' }} src={logo} alt='logo' /></a>
        <p> &copy; copyright 2025</p>
      </div>
      <p>Made by <b>Mohanapriyan M</b></p>
      <div className="icon-link">
        <a href='https://www.linkedin.com/in/mohanapriyan-m2006/' target='new'><img src={linkedin} alt='icon' /></a>
        <a href='https://github.com/mohanapriyan2006' target='new'><img src={git} alt='icon' /></a>
        <a href='mailto:mohanapriyan.m2006@gmail.com' target='new'><img src={mail} alt='icon' /></a>
      </div>

    </footer>
  )
}

export default Footer