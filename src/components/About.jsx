import React from 'react'
import reactjs from '../assets/react.png';
import js from '../assets/java-script.png';
import html from '../assets/html.png';
import java from '../assets/java.png';
import springBoot from '../assets/spring-boot.png';
import tailWind from '../assets/tailwind-css.png';
import mongodb from '../assets/mongodb.png';
import python from '../assets/python.png';
import cpp from '../assets/cpp.png';
import vscode from '../assets/vs-code.png';
import git from '../assets/git-hub.png';
import figma from '../assets/figma.png';
import aws from '../assets/aws.png';

const About = () => {
  return (
    <div>
        <div className="techstack">
            <p>//TechStack</p>
            <div>
                <img src={reactjs} alt='react'/>
                <img src={js} alt='img'/>
                <img src={html} alt='img'/>
                
                <img src={java} alt='img'/>
                <img src={springBoot} alt='img'/>
                <img src={tailWind} alt='img'/>
                
                <img src={mongodb} alt='img'/>
                <img src={python} alt='img'/>
                <img src={cpp} alt='img'/>

            </div>
        </div>
        <div className="about">
            <p>//About</p>
            <p>        I am a Full Stack Developer skilled in Java, Spring Boot, React.js, and modern web technologies, with a strong passion for AI & Data Science. I love building end-to-end applications, solving complex problems, and creating seamless digital experiences.</p>
        </div>
        <div className="tools">
            <p>//Tools</p>
            <div>
                <img src={vscode}  alt='img'/>
                <img src={git} alt='img'/>
                <img src={figma}  alt='img'/>
                <img src={aws}  alt='img'/>
            </div>
        </div>
    </div>
  )
}

export default About