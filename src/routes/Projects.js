import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import HeroImgProjects from '../components/HeroImgProjects';
// import PricingCard from '../components/PricingCard';
import Work from '../components/Work';

const Projects = () => {
  return (
    <div>
      <NavBar />
      <HeroImgProjects />
      <Work />
      {/* <PricingCard/> */}
      <Footer />
    </div>
  )
}

export default Projects