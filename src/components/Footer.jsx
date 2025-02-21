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
        <img style={{height: '20px', width: '75px'}} src={logo} alt='logo' />
        <p> &copy; copyright 2025</p>
        </div>
        <p>Made by <b>Mohanapriyan M</b></p>
        <div className="icon-link">
            <img src={linkedin} alt='icon' />
            <img src={git} alt='icon' />
            <img src={mail} alt='icon' />
        </div>

    </footer>
  )
}

export default Footer