import React from 'react';
import Heading from './Heading';
import Card from './Card';
import '../app/styles/Projects.css'; // Import custom CSS file

const data = [
  {
    id: 0,
    title: "Resume Builder",
    desc: "A Typescript-based Interactive Resume Builder built with HTML, CSS & Typescript.",
    img: "/Project-01.png",
    tags: ["HTML", "Node", "CSS", "Typescript"],
  },
  {
    id: 1,
    title: "Travel website",
    desc: "Travel and Tours responsive website built with core HTML and CSS.",
    img: "/Project-02.png",
    tags: ["HTML", "Node", "CSS", "Typescript"],
  },
  {
    id: 2,
    title: "Simple Calculator",
    desc: "A basic HTML, CSS and Typescript Calculator for performing simple calculations.",
    img: "/Project-03.png",
    tags: ["HTML", "Node", "CSS", "Typescript"],
  },
];

const Projects = () => {
  return (
    <div id='projects' className='projects-container'>
      <Heading title='Projects' />
      <div className='projects-grid'>
        {data.map((el) => (
          <Card 
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;

