import "./AddAndEdit.css";
import React, { useState } from "react";

/* Component which displays book title */

const PageTitle = (props) => {
  const { onChange, value } = props;
  const [pageTitle, setPageTitle] = useState(value);

  //when title is changed callback to parent component
  const onInputChange = (event) => {
    setPageTitle(event.target.value);
    onChange(event.target.value);
  };

  return (
    <div className="page-title-container">
      <label className="page-title-header">Page Title</label>
      <input
        className="page-header-body"
        placeholder="Page Title"
        type="text"
        onChange={onInputChange}
        value={pageTitle}
      />
    </div>
  );
};

export default PageTitle;
