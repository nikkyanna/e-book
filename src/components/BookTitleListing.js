import "./BookTitleListing.css";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { selectedBook } from "../actions/index";

/* Page dispalys the list of books - title */

let defaultId = "option0";
const BookTitleListing = (props) => {
  //by default first option of list is selected, setting the background color
  useEffect(() => {
    document.getElementById(defaultId).style.backgroundColor = "#afb0b1";
  }, []);

  // On selecting each time, the action is invoked, also changing the background color accordingly
  const onDivClick = (book, id) => {
    if (document.getElementById(defaultId) !== null)
      document.getElementById(defaultId).style.backgroundColor = "#dfdfe1";
    defaultId = id;
    document.getElementById(id).style.backgroundColor = "#afb0b1";
    props.selectedBook(book);
  };

  //displays the list of book titles 
  const renderList = () => {
    return props.books.map((book, index) => {
      return (
        <div className="book-list-container" key={book.id}>
          <div
            className="book-list-container-selected"
            id={`option${index}`}
            onClick={() => onDivClick(book, `option${index}`)}
          >
            {book.title}
          </div>
        </div>
      );
    });
  };

  return <div className="book-list">{renderList()}</div>;
};

const mapStateToProps = (state) => {
  return { books: state.books.all };
};

export default connect(mapStateToProps, { selectedBook })(BookTitleListing);
