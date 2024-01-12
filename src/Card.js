import './Card.css'
import React from 'react';

const Card = ({ image, options, onSelect }) => {
  return (
    <div className="card">
      <img src={image} alt="Dog" className="card-image" />
      <select className="dropdown" onChange={onSelect}>
        {options.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default Card;
