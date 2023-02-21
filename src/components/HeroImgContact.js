import './HeroImgContact.css';
import React from 'react';
import contactImg from "../assets/Contact.jpg";

const HeroImgContact = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className="intro-img" src={contactImg} alt="background"/>
        </div>
        <div className="content">
            <h1>Contact</h1>
            <p>Lets have a talk</p>
        </div>
    </div>
  )
}

export default HeroImgContact