import React, { useState } from "react";
import { FaPencilAlt } from "react-icons/fa";

const Card = ({ card, onEditCard, onDeleteCard }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newCardText, setNewCardText] = useState(card.text);

  const handleSave = () => {
    onEditCard(newCardText);
    setIsEditing(false);
  };

  return (
    <div className="card">
      {isEditing ? (
        <div>
          <input
            type="text"
            value={newCardText}
            onChange={(e) => setNewCardText(e.target.value)}
          />
          <button
            onClick={handleSave}
            style={{ backgroundColor: "green", color: "white" }}
          >
            Save
          </button>
          <button
            onClick={onDeleteCard}
            style={{ backgroundColor: "red", color: "white" }}
          >
            Delete
          </button>
        </div>
      ) : (
        <div className="card-content">
          <p>{card.text}</p>
          <FaPencilAlt
            onClick={() => setIsEditing(true)}
            className="edit-icon"
          />
        </div>
      )}
    </div>
  );
};

export default Card;
