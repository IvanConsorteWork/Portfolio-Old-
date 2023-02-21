import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import AboutContent from '../components/AboutContent';
import HeroImgAbout from '../components/HeroImgAbout';

const About = () => {
  return (
    <div>
      <NavBar />
      <HeroImgAbout />
      <AboutContent />
      <Footer />
    </div>
  )
}

export default About