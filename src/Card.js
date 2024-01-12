import './Card.css'
import React from 'react';

const Card = ({ image, options, breedName, onSelect }) => {
  return (
    <div className="card">
      <p>What breed is/are these dogs?</p>
      <img src={image} alt="Dog" className="card-image" />
      <select className="dropdown" onChange={onSelect}>
        <option value="" disabled selected>Select a breed</option>
          {options.map((option, index) => (
            <option key={index}>{option}</option>        
          ))}
      </select>
    </div>
  );
};


export default Card;
