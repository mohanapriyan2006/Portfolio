import React from 'react'
import web from '../assets/web-ser.jpg';
import uiux from '../assets/uiux-ser.jpg';
import edit from '../assets/edit-ser.jpg';
import whyus1 from '../assets/whyus1.jpg';
import whyus2 from '../assets/whyus2.jpg';
import '../styles/Service.css';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { height, width } from '@fortawesome/free-solid-svg-icons/fa0';

const services = [
    {
        title: "Web Development",
        img: web
    },
    {
        title: "UI/UX Designs",
        img: uiux
    },
    {
        title: "Video / Photo Editing",
        img: edit
    }
];

const whyus = [
    {
        title: "Expertise in Modern Technologies",
        description: " Proficient in React.js, Bootstrap, APIs, and containerization with Docker, ensuring high-performance applications.",
        img: whyus1
    },
    {
        title: " Creative & Scalable Solutions",
        description: " I focus on intuitive UI/UX and scalable architectures, making your digital presence stand out.",
        img: whyus2
    }
]


const Service = ({ loading }) => {
    return (
        <div className='service-div'>
            <div>
                <h4 className="design-title">Services</h4>
                <div className="title-div"></div>
            </div>


            <div className="services">
                {services.map((item, id) => (
                    <div key={id} className="service">
                        {loading ? <Skeleton height={150} width={200} />
                                    :<img src={item.img} />}
                        <p>{item.title}</p>
                    </div>
                ))
                }
            </div>

            <h5 className='title'>Why choose me?</h5>

            <div className="whyme-div">
                {whyus.map((item, id) => (

                    <div className="whyme" key={id}>
                        {
                            loading ? <Skeleton height={100} width={230}/>
                                :
                                <img src={item.img} alt={`${item.title} preview`} />
                        }
                        <div className="content" key={id}>
                            <h5>{item.title}</h5>
                            <p>{item.description}</p>
                        </div>
                    </div>


                ))}
            </div>

            <a href='#contact'><button className='hire-btn'>Hire me !</button></a>

        </div>
    )
}

export default Service;