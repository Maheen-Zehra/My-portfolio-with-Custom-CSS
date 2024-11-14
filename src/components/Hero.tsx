import React, { useEffect } from 'react';
import '../app/styles/Hero.css'; 

const Hero = () => {
  // Ensure AOS is initialized if you're using animations
  useEffect(() => {
    import('aos').then(AOS => {
      AOS.init({ duration: 1200 });
    });
  }, []);

  return (
    <div
      id="hero"
      className="hero-section"
      role="banner"
      aria-label="Hero section with background image"
    >
      <div className="hero-container">
        <div className="hero-left"></div>
        <div className="hero-text">
          <div>
            <p data-aos="zoom-in-up">I'm Maheen Zehra,</p>
            <p data-aos="zoom-in-up">a Front-End Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
