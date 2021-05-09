import "./Dashboard.css";
import React from "react";
import BookTitleListing from "../components/BookTitleListing";
import BookContent from "../components/BookContent";

/* Page displays the List of books with title on left side,
corresponding content on right side */

const DashBoard = () => {
  return (
    <div className="dashboard-container">
      <BookTitleListing />
      <BookContent />
    </div>
  );
};

export default DashBoard;
