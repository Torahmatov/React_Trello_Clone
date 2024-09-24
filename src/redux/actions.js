// Action Types
export const ADD_CARD = "ADD_CARD";
export const EDIT_CARD = "EDIT_CARD";
export const DELETE_CARD = "DELETE_CARD";
export const ADD_LIST = "ADD_LIST";


export const addCard = (listId, cardText) => ({
  type: ADD_CARD,
  payload: { listId, cardText },
});

export const editCard = (listId, cardIndex, newCardText) => ({
  type: EDIT_CARD,
  payload: { listId, cardIndex, newCardText },
});

export const deleteCard = (listId, cardIndex) => ({
  type: DELETE_CARD,
  payload: { listId, cardIndex },
});

export const addList = (title) => ({
  type: ADD_LIST,
  payload: { title },
});
