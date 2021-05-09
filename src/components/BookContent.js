import "./BookContent.css";
import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import editIcon from "../assets/edit.png";
import addIcon from "../assets/add.png";

/* Page dispalys the details of each selected book */
const BookContent = (props) => {
  const { book } = props;

  //method which returns the text and image, on clicking images redireted to correspondig pages
  const renderTextAndImage = (title, icon, pathName) => {
    return (
      <div className="text-image-container">
        <span className="text-title">{title}</span>
        <img
          onClick={() =>
            props.history.push({
              pathname: `/${pathName}`,
            })
          }
          className="image-icons"
          src={icon}
          alt=""
        />
      </div>
    );
  };

  return (
    <div>
      <div className="book-content-title">
        {renderTextAndImage(book.title, editIcon, "edit")}
      </div>
      <div className="book-content">{book.content}</div>
      <div className="book-content-add">
        {renderTextAndImage("Add New Page", addIcon, "add")}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { book: state.selected };
};

export default compose(withRouter, connect(mapStateToProps))(BookContent);
