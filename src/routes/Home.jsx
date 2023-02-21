import React from 'react'
import Navbar from '../components/Navbar';
import AircraftTypes from '../components/pages/home/AircraftTypes';
import Hero from '../components/pages/home/Hero';
import Testimonials from '../components/pages/home/Testimonials';

const Home = () => {
  return (
      <div>
          <Navbar />
          <Hero />
          <AircraftTypes />
          <Testimonials />
    </div>
  )
}

export default Home