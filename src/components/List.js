import React, { useState } from "react";
import Card from "./Card";

const List = ({ list, onAddCard, onEditCard, onDeleteCard }) => {
  const [newCardText, setNewCardText] = useState("");
  const [isAddingCard, setIsAddingCard] = useState(false); 
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && newCardText.trim()) {
      onAddCard(newCardText);
      setNewCardText("");
      setIsAddingCard(false); 
    }
  };

  return (
    <div className="list">
      <h3>{list.title}</h3>
      {list.cards.map((card, index) => (
        <Card
          key={index}
          card={card}
          onEditCard={(newText) => onEditCard(index, newText)}
          onDeleteCard={() => onDeleteCard(index)}
        />
      ))}
      {isAddingCard ? (
        <div>
          <input
            type="text"
            placeholder="Enter the text for this card ..."
            value={newCardText}
            onChange={(e) => setNewCardText(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button
            onClick={() => {
              if (newCardText.trim()) {
                onAddCard(newCardText);
                setNewCardText("");
                setIsAddingCard(false); 
              }
            }}
          >
            Save
          </button>
        </div>
      ) : (
        <button onClick={() => setIsAddingCard(true)} >+ Add a card</button>
      )}
    </div>
  );
};

export default List;
