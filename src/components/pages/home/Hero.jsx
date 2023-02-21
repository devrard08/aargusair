import React from 'react'
import { Link } from 'react-router-dom';
import '../home/Hero.css';

const Hero = () => {
  return (
      <section className="hero">
          <div className="hero-body">
              <div className="hero-body_content">
                  <h1>Private Jet Rental | Air Charter</h1>
                  <p>Grand Rapids, MI</p>
                  <h2>Locally Based - Serving all of Michigan</h2>
                  <h3>Jet, Turboprop, Piston Aircraft</h3>
                  <p>Pickup at airport near you. Serving all of Michigan.</p>
                  <div className="hero-body_content-btn">
                      <a className='btn hero-btn' href="/" target="_blank" rel="noopener noreferrer">Get Flight Quote</a>
                  </div>
              </div>
              <div className="hero-body_video">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/k3fnW3cSUrw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
          </div>
    </section>
  )
}

export default Hero