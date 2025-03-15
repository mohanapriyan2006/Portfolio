import React, { useState, useEffect } from 'react';
import '../styles/Home.css';
import home from '../assets/home.gif';
import resume from '../assets/resume.pdf';

const Home = () => {
  const roles = ['UI/UX Designer', 'Full Stack Developer'];
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[loopNum % roles.length];
      const updatedText = isDeleting
        ? currentRole.substring(0, text.length - 1)
        : currentRole.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000); // Pause before deleting
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1); // Move to the next role
        setTypingSpeed(150); // Reset typing speed
      } else {
        setTypingSpeed(isDeleting ? 50 : 100); // Adjust typing speed
      }
    };

    const timer = setTimeout(() => handleTyping(), typingSpeed);
    return () => clearTimeout(timer); // Cleanup on unmount
  }, [text, isDeleting, loopNum, roles]);

  return (
    <div className="home">
      <div className='home-content'>
        <h2>Hello,</h2>
        <h1>I'm <b style={{ color: '#0084ff' }}>Mohanapriyan</b></h1>
        <div className='typing-container'>
          {text}
          <span className="cursor">|</span> {/* Blinking cursor */}
        </div>
        <div className='btns'>
          <a style={{ textDecoration: 'none', color: 'white' }} href='#contact'>
            <button className='btn-1'>Let's Talk</button>
          </a>
          <a style={{ textDecoration: 'none', color: 'white' }} href={resume} target='new'>
            <button className='btn-2'>Download CV</button>
          </a>
        </div>
      </div>
      <img className='home-img' src={home} alt='landing img' />
    </div>
  );
};

export default Home;