/* Returns an action */

export const selectedBook = (book) => {
  return {
    type: "SELECTED_BOOK",
    payload: book,
  };
};

export const saveNewBook = (book) => {
  return {
    type: "SAVE_NEW_BOOK",
    payload: book,
  };
};

export const updateNewBook = (book) => {
  return {
    type: "UPDATE_BOOK",
    payload: book,
  };
};
