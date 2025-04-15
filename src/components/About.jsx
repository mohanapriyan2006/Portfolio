import React from 'react'
import '../styles/About.css';
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
import ubuntu from '../assets/ubuntu.png';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const About = ({ loading }) => {

    return (
        <div className='about-page'>
            <div className="techstack-container">
                <p className='title'>TechStack</p>

                <div className='techstacks'>
                    {loading ?
                        <Skeleton height={110} width={110} borderRadius={10} /> :
                        <div className="techstack">
                            <img src={reactjs} alt='react' />
                            <p>React js</p>
                        </div>}

                    {loading ?
                        <Skeleton height={110} width={110} borderRadius={10} /> : <div className="techstack">
                            <img src={js} alt='java-script' />
                            <p>JavaScript</p>
                        </div>}

                    {loading ?
                        <Skeleton height={110} width={110} borderRadius={10} /> : <div className="techstack">
                            <img src={html} alt='html' />
                            <p>HTML</p>
                        </div>}

                    {loading ?
                        <Skeleton height={110} width={110} borderRadius={10} /> : <div className="techstack">
                            <img src={java} alt='java' />
                            <p>Java</p>
                        </div>}

                    {loading ?
                        <Skeleton height={110} width={110} borderRadius={10} /> : <div className="techstack">
                            <img src={springBoot} alt='spring-boot' />
                            <p>Spring Boot</p>
                        </div>}

                    {loading ?
                        <Skeleton height={110} width={110} borderRadius={10} /> : <div className="techstack">
                            <img style={{ marginTop: '5px' }} src={tailWind} alt='tailwind-css' />
                            <p style={{ marginTop: '15px' }}>Tailwind CSS</p>
                        </div>}

                    {loading ?
                        <Skeleton height={110} width={110} borderRadius={10} /> : <div className="techstack">
                            <img src={mongodb} alt='mongodb' />
                            <p>MongoDB</p>
                        </div>}


                    {loading ?
                        <Skeleton height={110} width={110} borderRadius={10} /> : <div className="techstack">
                            <img src={python} alt='python' />
                            <p>Python</p>
                        </div>}

                    {loading ?
                        <Skeleton height={110} width={110} borderRadius={10} /> : <div className="techstack">
                            <img src={cpp} alt='img' />
                            <p>C++</p>
                        </div>}



                </div>
            </div>
            <div className="about-tools">

                <div className="about">
                    <p className='title'>About</p>
                    {loading ? <><Skeleton height={25} width={650} borderRadius={5} /> <Skeleton height={25} width={650} borderRadius={5} /></> : <p>I am a Full Stack Developer skilled in Java, Spring Boot, React.js, and modern web technologies, with a strong passion for AI & Data Science.</p>}
                </div>
                <div className="tools-container">
                    <p className='title'>Tools</p>
                    <div className='tools'>

                        {loading ?
                            <Skeleton height={110} width={110} borderRadius={10} /> : <div className="tool">
                                <img src={vscode} alt='img' />
                            </div>}


                        {loading ?
                            <Skeleton height={110} width={110} borderRadius={10} /> : <div className="tool">
                                <img src={git} alt='img' />
                            </div>}


                        {loading ?
                            <Skeleton height={110} width={110} borderRadius={10} /> : <div className="tool">
                                <img style={{ marginTop: '5px' }} src={figma} alt='img' />
                            </div>}


                        {loading ?
                            <Skeleton height={110} width={110} borderRadius={10} /> : <div className="tool">
                                <img style={{ marginTop: '15px' }} src={aws} alt='img' />
                            </div>}

                        {loading ?
                            <Skeleton height={110} width={110} borderRadius={10} /> : <div className="tool">
                                <img style={{ marginTop: '3px' }} src={ubuntu} alt='img' />
                            </div>}

                    </div>

                </div>
            </div>
        </div>
    )
}

export default About