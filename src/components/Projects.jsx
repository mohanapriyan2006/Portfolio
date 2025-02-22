import React from 'react';
import '../styles/Projects.css';
import eshop from '../assets/eshop.png';
import mews from '../assets/mews.png';
import postup from '../assets/postup.png';
import portfolio from '../assets/portfolio.png';
import greenmart from '../assets/greenmart.png';
import portfolioDesign from '../assets/portfolio-design.pdf';
import greenmartDesign from '../assets/greenmart-design.pdf';

const Projects = () => {
  return (
    <div className="project-page">
      <div className="projects">
        <h4>Projects</h4>
        <div className="title-div">
        </div>

        <div className="project">
          <div className="content">
            <p className="title">
        //eShop – E-commerce Platform
            </p>
            <p className='sub-title'>
              Tech Stack: HTML, CSS, JavaScript
            </p>
            <ul>
              <li>Developed a responsive e-commerce website with a dynamic product catalog and shopping cart functionality.</li>
              <li>Designed an intuitive UI to enhance user experience and optimize product browsing.</li>
              <li>Implemented seamless client-side interactivity for adding and managing cart items.</li>
            </ul>
            <div className='btns'>
            <a href='https://e-shop-website-project.netlify.app/' target='new'>
            <button className='btn-1'>Visit site</button></a>
              <a href='https://github.com/mohanapriyan2006/EShop' target='new'><button className='btn-2'>
                Repository</button></a>
            </div>
          </div>
          <div>
            <img src={eshop} alt='img' />
          </div>
        </div>

        <div className="project">
          <img style={{ marginRight: '10px', marginLeft: '0' }} src={mews} alt='img' />
          <div className="content">
            <p className="title">
        // Mews – Real-Time News Website
            </p>
            <p className='sub-title'>
              Tech Stack: React.js, Bootstrap, API Integration
            </p>
            <ul>
              <li>Built a news aggregation platform displaying the latest headlines with category-based filtering (Sports, Health, Business, etc.).</li>
              <li>Integrated third-party APIs to fetch real-time news dynamically.</li>
              <li>Designed a mobile-friendly, responsive UI using Bootstrap for smooth accessibility across devices.</li>
            </ul>
            <div className='btns'>
            <a href='https://mews-newsapp.netlify.app/' target='new'>
              <button className='btn-1'>Visit site</button></a>
              <a href='https://github.com/mohanapriyan2006/mews-api' target='new'>
                <button className='btn-2'>
                  Repository</button></a>
            </div>
          </div>
        </div>


        <div className="project">
          <div className="content">
            <p className="title">
        // PostUp – Message Posting Application
            </p>
            <p className='sub-title'>
              Tech Stack: React.js, CSS, React Router
            </p>
            <ul>
              <li>Developed a CRUD-based message posting app allowing users to create, edit, and delete posts with automatic timestamps.</li>
              <li>Implemented React Router for seamless navigation and user experience.</li>
              <li>Designed a clean, responsive interface for better content management and usability.</li>
            </ul>
            <div className='btns'>
              <a href='https://postup-reactapp.netlify.app/' target='new'>
                <button className='btn-1'>Visit site</button></a>
              <a href='https://github.com/mohanapriyan2006/postup-api' target='new'>
              <button className='btn-2'>
                Repository</button></a>
            </div>
          </div>
          <img src={postup} alt='img' />
        </div>



      </div>

      <h4>Designs</h4>
      <div className="title-div">
      </div>
      <div className="designs">
        <a href={portfolioDesign} target='new'><img style={{ height: '250px', width: '500px' }} src={portfolio} alt='img' /></a>
        <a href={greenmartDesign} target='new'><img style={{ height: '250px', width: '500px' }} src={greenmart} alt='img' /></a>
      </div>
    </div>
  )
}

export default Projects;