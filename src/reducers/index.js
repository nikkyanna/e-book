import { combineReducers } from "redux";
import uuid from "react-uuid";

/* Reducers */

//initally data is loaded from local storage
let INITIAL_STATE = {
  all: [],
  currentBook: {},
};

try {
  let state = localStorage.getItem("bookDetails");
  if (state) {
    INITIAL_STATE.all = JSON.parse(state || JSON.stringify(INITIAL_STATE.all));
    INITIAL_STATE.currentBook =
      INITIAL_STATE.all[0] || INITIAL_STATE.currentBook;
  }
} catch (e) {}

//all the reducers will be called first, so we update initial state value as localstorage value

const booksReducer = (state, action = {}) => {
  state = INITIAL_STATE;

  switch (action.type) {
    case "SAVE_NEW_BOOK":
      let newBook = action.payload;
      newBook.id = uuid();
      let allBooks = state.all;
      allBooks.push(newBook);
      return Object.assign(state, { allBooks });

    case "UPDATE_BOOK":
      let editBook = state.all.map((book) => {
        if (book.id === action.payload.id) {
          return action.payload;
        }
        return book;
      });

      return Object.assign(
        state,
        { currentBook: action.payload },
        { all: editBook }
      );

    default:
      return state;
  }
};

//select a book
const selectedBook = (selected, action) => {
  selected = INITIAL_STATE.currentBook;
  if (action.type === "SELECTED_BOOK") {
    return action.payload;
  }
  return selected;
};

//combining all the reducers
export default combineReducers({
  books: booksReducer,
  selected: selectedBook,
});
