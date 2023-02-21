import './HeroImgProjects.css';
import React from 'react';
import projectsImg from "../assets/Projects.jpg";

const HeroImgProjects = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className="intro-img" src={projectsImg} alt="background"/>
        </div>
        <div className="content">
            <h1>Projects</h1>
            <p>This are my works</p>
        </div>
    </div>
  )
}

export default HeroImgProjects