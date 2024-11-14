import React from 'react';
import '../app/styles/Heading.css';

interface PropsType {
  title: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6; // Optional prop for heading level, default to h2
}

const Heading: React.FC<PropsType> = ({ title, level = 2 }) => {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements; // Dynamically use the correct heading tag

  return (
    <div className='heading-container'>
      <HeadingTag className='heading-title'>{title}</HeadingTag>
    </div>
  );
};

export default Heading;
