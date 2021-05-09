import "./AddAndEdit.css";
import React, { Component } from "react";
import PageTitle from "./PageTitle";
import DraftBookContent from "./DraftBookContent";
import Button from "./Button";
import { saveNewBook, updateNewBook } from "../../actions/index";
import { connect } from "react-redux";
import uuid from "react-uuid";
import { compose } from "redux";
import { withRouter } from "react-router-dom";

/* Add and Edit Component  */

class Page extends Component {
  constructor(props) {
    super(props);

    //if from add page, by default no data to be dispalyed,
    //from edit - dispaly the already exsisting selected book data
    if (props.newEntry) {
      this.state = {
        title: "",
        content: "",
      };
    } else {
      this.state = {
        title: props.books.title,
        content: props.books.content,
      };
    }
  }

  //add a new book/ update the current book details
  onButtonClick = () => {
    const { title, content } = this.state;
    
    let book = {
      id: this.props.books.id || uuid(),
      title: title,
      content: content,
    };

    if (book.title.length < 1 || book.content.length < 1) {
      alert("Page Title and Page Content are Required");
      return;
    }

    if (this.props.newEntry) {
      this.props.saveNewBook(book);
    } else {
      this.props.updateNewBook(book);
    }

    this.backButtonHandler();
  };

  //navigates to the previous page
  backButtonHandler = () => {
    this.props.history.goBack();
  };

  //setting the book title
  onTitleChange = (changedValue) => {
    this.setState({
      title: changedValue,
    });
  };

  //setting the book content
  onContentChange = (changedContent) => {
    this.setState({
      content: changedContent,
    });
  };

  render() {
    const { title, content } = this.state;
    const { newEntry } = this.props;
    return (
      <div>
        <PageTitle onChange={this.onTitleChange} value={title} />
        <DraftBookContent onChange={this.onContentChange} value={content} />
        <div className="page-button-conatiner">
          <Button
            text={newEntry ? "SAVE PAGE" : "UPDATE PAGE"}
            color="#aa66cc"
            onClick={this.onButtonClick}
          />
          <Button
            text="BACK TO BOOK"
            color="#4285f4"
            onClick={this.backButtonHandler}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { books: state.selected };
};

export default compose(
  withRouter,
  connect(mapStateToProps, { saveNewBook, updateNewBook })
)(Page);
