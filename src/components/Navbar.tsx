import React, { useEffect, useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import '../app/styles/Navbar.css'; 

const Navbar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('nav ul li a');
  
      let currentSection: string | null = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 50) {
          currentSection = section.getAttribute('id');
        }
      });
  
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
          link.classList.add('active');
        }
      });
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href')?.slice(1);
    const targetElement = document.getElementById(targetId!);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar-container">
      <div className="navbar-inner">
        <div className="logo-container">
          <img src="logo.png" alt="logo" className="logo" />
          <div className="logo-text">Maheen Zehra</div>
        </div>

        <ul className={`navbar-links ${isMenuOpen ? 'inactive' : ''}`}>
          <li><a href="#hero" onClick={handleClick}>Home</a></li>
          <li><a href="#projects" onClick={handleClick}>Projects</a></li>
          <li><a href="#skills" onClick={handleClick}>Skills</a></li>
          <li><a href="#contact" onClick={handleClick}>Contact</a></li>
          <li><a href="#about" onClick={handleClick}>About</a></li>
        </ul>

        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>
      </div>

      {isMenuOpen && (
        <ul className="mobile-menu">
          <li><a href="#hero" onClick={handleClick}>Home</a></li>
          <li><a href="#projects" onClick={handleClick}>Projects</a></li>
          <li><a href="#skills" onClick={handleClick}>Skills</a></li>
          <li><a href="#contact" onClick={handleClick}>Contact</a></li>
          <li><a href="#about" onClick={handleClick}>About</a></li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;

