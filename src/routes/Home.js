import React from 'react';
import HeroImg from '../components/HeroImg';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <NavBar/>
      <HeroImg />
      <Footer />
    </div>
  )
}

export default Home