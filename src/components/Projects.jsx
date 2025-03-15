import React, { useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import '../styles/Projects.css';
import eshop from '../assets/eshop.png';
import mews from '../assets/mews.png';
import postup from '../assets/postup.png';
import portfolio from '../assets/portfolio.png';
import greenmart from '../assets/greenmart.png';
import artiction from '../assets/artiction.png';
import artictionDesign from '../assets/artiction-design.pdf';
import portfolioDesign from '../assets/portfolio-design.pdf';
import greenmartDesign from '../assets/greenmart-design.pdf';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleLeft, faCircleRight } from '@fortawesome/free-solid-svg-icons';


const Projects = () => {

  const [swiperInstance, setSwiperInstance] = useState(null);

  const designData = [
    {
      img: artiction,
      pdf: artictionDesign,
    },
    {
      img: portfolio,
      pdf: portfolioDesign,
    },
    {
      img: greenmart,
      pdf: greenmartDesign,
    }
  ];

  const projectData = [
    {
      title: 'eShop – E-commerce Platform',
      img: eshop,
      site: 'https://e-shop-website-project.netlify.app/',
      repo: 'https://github.com/mohanapriyan2006/EShop',
      techStack: 'HTML, CSS, JavaScript',
      description: [
        'Developed a responsive e-commerce website with a dynamic product catalog and shopping cart functionality.',
        'Designed an intuitive UI to enhance user experience and optimize product browsing.',
        'Implemented seamless client-side interactivity for adding and managing cart items.',
      ],
    },
    {
      title: 'Mews – Real-Time News Website',
      img: mews,
      site: 'https://mews-newsapp.netlify.app/',
      repo: 'https://github.com/mohanapriyan2006/mews-api',
      techStack: 'React.js, Bootstrap, API Integration',
      description: [
        'Built a news aggregation platform displaying the latest headlines with category-based filtering (Sports, Health, Business, etc.).',
        'Integrated third-party APIs to fetch real-time news dynamically.',
        'Designed a mobile-friendly, responsive UI using Bootstrap for smooth accessibility across devices.',
      ],
    },
    {
      title: 'PostUp – Message Posting Application',
      img: postup,
      site: 'https://postup-reactapp.netlify.app/',
      repo: 'https://github.com/mohanapriyan2006/postup-api',
      techStack: 'React.js, CSS, React Router',
      description: [
        'Developed a CRUD-based message posting app allowing users to create, edit, and delete posts with automatic timestamps.',
        'Implemented React Router for seamless navigation and user experience.',
        'Designed a clean, responsive interface for better content management and usability.',
      ],
    },
  ];

  return (
    <div className="project-page">
      <div className="projects">
        <h4>Projects</h4>
        <div className="title-div"></div>

        {projectData.map((project, index) => (
          <div className="project" key={index}>
            <a href={project.site} target="_blank" rel="noopener noreferrer">
              <img src={project.img} alt={`${project.title} Preview`} />
            </a>
            <div className="content">
              <p className="title">{project.title}</p>
              <p className="sub-title">Tech Stack: {project.techStack}</p>
              <ul>
                {project.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <div className="btns">
                <a href={project.site} target="_blank" rel="noopener noreferrer">
                  <button className="btn-1">Visit site</button>
                </a>
                <a href={project.repo} target="_blank" rel="noopener noreferrer">
                  <button className="btn-2">Repository</button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h4 className="design-title">Designs</h4>
      <div className="title-div"></div>

      {/* Swiper Carousel for Designs */}

      <div
        onMouseEnter={() => swiperInstance?.autoplay?.stop()}
        onMouseLeave={() => swiperInstance?.autoplay?.start()}
      >
        <Swiper
          className='design-swiper'
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000, // Autoplay delay in milliseconds (3 seconds)
            disableOnInteraction: false, // Continue autoplay even after user interaction
          }}
          navigation={{
            nextEl: '.next-btn', // Class for next arrow
            prevEl: '.prev-btn', // Class for previous arrow
          }}
          modules={[Pagination, Autoplay, Navigation]}
          onSwiper={(swiper) => setSwiperInstance(swiper)}
          style={{ maxWidth: '600px', width: '100%', margin: 'auto', marginTop: '20px' ,height: 'auto'}}
        >
          {designData.map((item, index) => (
            <SwiperSlide key={index} >
              <a href={item.pdf} target="_blank" rel="noopener noreferrer" >
                <img
                  className='design-img'
                  src={item.img}
                  alt="Design Preview"
                />
              </a>
            </SwiperSlide>
          ))}

        </Swiper>

        <div className="swiper-icons">
            <div  className='prev-btn'><FontAwesomeIcon icon={faCircleLeft}/></div>
            <div className='next-btn'><FontAwesomeIcon icon={faCircleRight}/></div>
          </div>
      </div>
    </div>
  );
};

export default Projects;