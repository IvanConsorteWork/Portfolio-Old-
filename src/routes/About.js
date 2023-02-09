import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';

const About = () => {
  return (
    <div>
      <NavBar />
      <HeroImg2 heading='About me' text='Im a full stack web developer'/>
      <Footer />
    </div>
  )
}

export default About