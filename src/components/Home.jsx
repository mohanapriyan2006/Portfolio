import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import '../styles/Home.css';
import home from '../assets/home.gif';
import resume from '../assets/resume.pdf';

const Home = ({loading}) => {
  const roles = ['UI/UX Designer', 'Full Stack Developer'];
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  
  useEffect(() => {
    if (loading) return; // Skip typing logic while loading

    const handleTyping = () => {
      const currentRole = roles[loopNum % roles.length];
      const updatedText = isDeleting
        ? currentRole.substring(0, text.length - 1)
        : currentRole.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(150);
      } else {
        setTypingSpeed(isDeleting ? 50 : 100);
      }
    };

    const timer = setTimeout(() => handleTyping(), typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, roles, typingSpeed, loading]);

  return (
    <div className="home">
      <div className='home-content'>
        <h2>Hello</h2>
        <h1>
          I'm{' '}
          
            <b style={{ color: '#0084ff' }}>Mohanapriyan</b>
        </h1>

        <div className='typing-container'>
          {text}
          <span className="cursor">|</span>
        </div>

        <div className='btns'>
          {loading ? (
            <>
              <Skeleton height={40} width={120} style={{ marginRight: 10 }} />
              <Skeleton height={40} width={140} />
            </>
          ) : (
            <>
              <a style={{ textDecoration: 'none', color: 'white' }} href='#contact'>
                <button className='btn-1'>Let's Talk</button>
              </a>
              <a style={{ textDecoration: 'none', color: 'white' }} href={resume} target='new'>
                <button className='btn-2'>Download CV</button>
              </a>
            </>
          )}
        </div>
      </div>

      <div className='home-img'>
        {loading ? (
          <Skeleton width={400} height={400} borderRadius={100} />
        ) : (
          <img  src={home} alt='landing img' />
        )}
      </div>
    </div>
  );
};

export default Home;
