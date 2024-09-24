import { ADD_CARD, EDIT_CARD, DELETE_CARD, ADD_LIST } from "./actions";

const initialState = {
  lists: [
    { id: 1, title: "First List", cards: [] },
    { id: 2, title: "Second List", cards: [] },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CARD:
      return {
        ...state,
        lists: state.lists.map((list) =>
          list.id === action.payload.listId
            ? {
                ...list,
                cards: [...list.cards, { text: action.payload.cardText }],
              }
            : list
        ),
      };
    case EDIT_CARD:
      return {
        ...state,
        lists: state.lists.map((list) =>
          list.id === action.payload.listId
            ? {
                ...list,
                cards: list.cards.map((card, index) =>
                  index === action.payload.cardIndex
                    ? { ...card, text: action.payload.newCardText }
                    : card
                ),
              }
            : list
        ),
      };
    case DELETE_CARD:
      return {
        ...state,
        lists: state.lists.map((list) =>
          list.id === action.payload.listId
            ? {
                ...list,
                cards: list.cards.filter(
                  (_, index) => index !== action.payload.cardIndex
                ),
              }
            : list
        ),
      };
    case ADD_LIST:
      return {
        ...state,
        lists: [
          ...state.lists,
          {
            id: state.lists.length + 1,
            title: action.payload.title,
            cards: [],
          },
        ],
      };
    default:
      return state;
  }
};

export default reducer;
