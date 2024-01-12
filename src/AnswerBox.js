import React from 'react';
import './AnswerBox.css';

const AnswerBox = ({ selectedOptions }) => {
  const handleButtonClick = () => {
    // Handle button click if needed
    console.log('Button clicked!');
  };

  return (
    <div className="answer-box">
      <h2>Selected Options</h2>
      <ul>
        {selectedOptions.map((option, index) => (
          <li key={index}>{option}</li>
        ))}
      </ul>
      <button className="green-button" onClick={handleButtonClick}>
        Submit
      </button>
    </div>
  );
};

export default AnswerBox;
