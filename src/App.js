import { useState, useEffect } from 'react';
import Card from './Card';

const Game = () => {
 const [cards, setCards] = useState([]);
 const [selectedOptions, setSelectedOptions] = useState([]);

 // Define the images and options for the cards
 const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
 const options = ['Option 1', 'Option 2', 'Option 3'];

 // Draw three random cards at the start of the game
 useEffect(() => {
   const drawnCards = Array.from({ length: 3 }, () => ({
     image: images[Math.floor(Math.random() * images.length)],
     selectedOption: null,
   }));
   setCards(drawnCards);
 }, []);

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
         options={options}
         onSelect={(event) => handleSelect(index, event.target.value)}
       />
     ))}
   </div>
 );
};

export default Game;