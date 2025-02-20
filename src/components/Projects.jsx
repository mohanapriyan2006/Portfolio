import React from 'react';
import '../styles/Projects.css';
import eshop from '../assets/eshop.png';
import mews from '../assets/mews.png';
import postup from '../assets/postup.png';

const Projects = () => {
  return (
    <div className="projects">
      <h4>Projects</h4>
      <div className="title-div">
      </div>

      <div className="project">
        <div className="content">
          <p className="title">
        //eShop – E-commerce Platform
          </p>
          <p>
            Tech Stack: HTML, CSS, JavaScript
          </p>
          <ul>
            <li>Developed a responsive e-commerce website with a dynamic product catalog and shopping cart functionality.</li>
            <li>Designed an intuitive UI to enhance user experience and optimize product browsing.</li>
            <li>Implemented seamless client-side interactivity for adding and managing cart items.</li>
          </ul>
        </div>
        <img src={eshop} alt='img' />
      </div>


      <div className="project">
        <img style={{marginRight: '10px',marginLeft: '0'}} src={mews} alt='img' />
        <div className="content">
          <p className="title">
        // Mews – Real-Time News Website
          </p>
          <p>
            Tech Stack: React.js, Bootstrap, API Integration
          </p>
          <ul>
            <li>Built a news aggregation platform displaying the latest headlines with category-based filtering (Sports, Health, Business, etc.).</li>
            <li>Integrated third-party APIs to fetch real-time news dynamically.</li>
            <li>Designed a mobile-friendly, responsive UI using Bootstrap for smooth accessibility across devices.</li>
          </ul>
        </div>
      </div>


      <div className="project">
        <div className="content">
          <p className="title">
        // PostUp – Message Posting Application
          </p>
          <p>
            Tech Stack: React.js, CSS, React Router
          </p>
          <ul>
            <li>Developed a CRUD-based message posting app allowing users to create, edit, and delete posts with automatic timestamps.</li>
            <li>Implemented React Router for seamless navigation and user experience.</li>
            <li>Designed a clean, responsive interface for better content management and usability.</li>
          </ul>
        </div>
        <img src={postup} alt='img' />
      </div>


    </div>
  )
}

export default Projects;