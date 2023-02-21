import React from 'react';
import HomeHeroImg from '../components/HomeHeroImg';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Work from '../components/Work';

const Home = () => {
  return (
    <div>
      <NavBar/>
      <HomeHeroImg />
      <Work />
      <Footer />
    </div>
  )
}

export default Home