import React from "react";
import { useDispatch, useSelector } from "react-redux";
import List from "./List";
import { addCard, editCard, deleteCard, addList } from "../redux/actions";

const TrelloBoard = () => {
  const dispatch = useDispatch();
  const lists = useSelector((state) => state.lists);
  const [newListTitle, setNewListTitle] = React.useState("");

  const handleKeyPressNewList = (e) => {
    if (e.key === "Enter" && newListTitle.trim()) {
      dispatch(addList(newListTitle));
      setNewListTitle("");
    }
  };

  return (
    <div className="board">
      <h1>React Trello Clone</h1>
      <div className="list-container">
        {lists.map((list) => (
          <List
            key={list.id}
            list={list}
            onAddCard={(cardText) => dispatch(addCard(list.id, cardText))} 
            onEditCard={(cardIndex, newCardText) =>
              dispatch(editCard(list.id, cardIndex, newCardText))
            } 
            onDeleteCard={(cardIndex) =>
              dispatch(deleteCard(list.id, cardIndex))
            } 
          />
        ))}
        <input
          type="text"
          placeholder="+Add a list"
          value={newListTitle}
          onChange={(e) => setNewListTitle(e.target.value)}
          onKeyPress={handleKeyPressNewList}
        />
      </div>
    </div>
  );
};

export default TrelloBoard;
