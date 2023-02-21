import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../components/Navbar.css'; // ! Navbar Styles
import { FaBars, FaTimes } from 'react-icons/fa'; // * Mobile Icons

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

  return (
    <header>
          <NavLink to='/'>
              <div className="logo">
                  <h1>aargus air</h1>
              </div>
          </NavLink>
          <div className="hamburger" onClick={handleClick}>
              {click ? (<FaTimes size={30} />) : (<FaBars size={30} />)}
          </div>
          <nav className={click ? 'navbar active' : 'navbar'}>
              <ul>
                  <li>
                      <NavLink to='/'>Home</NavLink>
                  </li>
                  <li>
                      <NavLink to='/learn-more'>Learn More</NavLink>
                  </li>
                  <li>
                      <NavLink to='/charter-options'>Charter Options</NavLink>
                  </li>
                  <li>
                      <NavLink to='/faq'>F.A.Q</NavLink>
                  </li>
                  <li>
                      <NavLink to='/why-aargus'>Why Aargus</NavLink>
                  </li>
                  <li>
                      <NavLink to='/testimonials'>Testimonials</NavLink>
                  </li>
                  <li>
                      <NavLink to='/charter-aircraft-fleet'>Charter Aircraft Fleet</NavLink>
                  </li>
                  <li>
                      <NavLink to='/contact-us'>Contact Us</NavLink>
                  </li>
                  <li>
                      <NavLink to='/more'>More</NavLink>
                  </li>
              </ul>
          </nav>

      </header>
  )
}

export default Navbar