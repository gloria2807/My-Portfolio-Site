import React from 'react';
import Home from './Home';
import Footer from './Footer/Footer';
import './Profile.css';
import Navbar from '../Navbar/Navbar';
import AboutMe from '../AboutMe/AboutMe';
import Skills from '../Skills/Skills';
import Footer1 from './Footer/Footer1';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Footermain from '../Footer/Footermain';

export default function Profile() {
  return (
    <div className="home-container">
      <Navbar />
      <Home />
      <Footer1 />
      <AboutMe />
      <Footer />
      <Skills />
      <Projects />
      <Contact />
      <Footermain />
    </div>
  );
};