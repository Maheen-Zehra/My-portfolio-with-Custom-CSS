import React from 'react';
import Heading from './Heading';
import '../app/styles/Skills.css'; 

const Skills = () => {
  return (
    <div id='skills' className='skills-container'>
      <div className='skills-content'>
        <div data-aos="zoom-in-up">
          <Heading title='My Skills' />
          <h2 className='skills-heading'>Technologies I work with</h2>
          <p className='skills-description'>
            I have a solid foundation in Web Development, specializing in HTML, CSS, and Typescript. My experience extends to using frameworks like React and Next.js to create dynamic and user-friendly applications. I'm also proficient in Tailwind CSS for efficient styling and design. With a passion for learning, I stay updated on the latest technologies to enhance my skill set and contribute effectively to projects.
          </p>
        </div>

        <div className='skills-grid'>
          <div className='skills-column'>
            <h2>Typescript</h2>
            <h2>Next.js</h2>
          </div>
          <div className='skills-column'>
            <h2>React.js</h2>
            <h2>Tailwind</h2>
          </div>
          <div className='skills-column'>
            <h2>HTML</h2>
            <h2>CSS</h2>
          </div>
          <div className='skills-column'>
            <h2>Node.js</h2>
            <h2>Javascript</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

