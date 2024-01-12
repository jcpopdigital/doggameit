import { useState, useEffect } from 'react';
import Card from './Card';
import AnswerBox from './AnswerBox'; // Import the AnswerBox component

// Function to sort an array in alphabetical order and move the last element to the front
const sortAndMoveToFront = (array) => {
  const sortedArray = [...array].sort();
  const lastElement = sortedArray.pop();
  sortedArray.unshift(lastElement);
  return sortedArray;
};

const Game = () => {
  const [cards, setCards] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch dog images with associated breed information
        const responseImages = await fetch('https://dog.ceo/api/breeds/image/random/3');
        const dataImages = await responseImages.json();
        const images = dataImages.message;

        // Extract breed names using regular expression
        const breedNames = images.map((image) => {
          const breedMatch = image.match(/\/breeds\/([^/]+)\//);
          return breedMatch ? breedMatch[1] : 'Unknown Breed';
        });

        // Sort breed names alphabetically and move the last name to the front
        let commonOptions = sortAndMoveToFront(breedNames);

        // Construct cards with the sorted and moved options for the dropdown list
        const cardsData = images.map((image) => {
          return {
            image: image,
            options: commonOptions,
            selectedOption: null,
          };
        });

        // Update state with the completed dropdown lists
        setCards(cardsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run only once on mount

  const handleSelect = (index, option) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[index] = option;
    setSelectedOptions(newSelectedOptions);
  };

  return (
    <div>
      {cards.map((card, index) => (
        <Card
          key={index}
          image={card.image}
          options={card.options}
          onSelect={(event) => handleSelect(index, event.target.value)}
        />
      ))}
      <AnswerBox selectedOptions={selectedOptions} />
    </div>
  );
};

export default Game;
