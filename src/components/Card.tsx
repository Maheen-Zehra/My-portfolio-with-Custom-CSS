import React from 'react';
import Image from 'next/image';
import '../app/styles/Card.css';

interface propsType {
    title: string;
    desc: string;
    img: string;
    tags: string[];
}

const Card: React.FC<propsType> = ({ title, desc, img, tags }) => {
  return (
    <div className='card' data-aos="flip-right">
      <div>
        <Image className='card-image'
          src={img}
          width={300}
          height={350}
          alt={title}
        />
      </div>
     
      <div className='card-content'>
        <div className='card-title'>{title}</div>
        <div className='card-desc'>{desc}</div>
        <div className='card-tags'>
          {tags.map((el) => (
            <div className='tag' key={el}>
              {el}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;


