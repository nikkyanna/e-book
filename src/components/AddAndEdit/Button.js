import "./AddAndEdit.css";
import React from "react";
/* Page to display button */

const Button = (props) => {
  const { onClick, text } = props;

  return (
    <div className="button-container">
      <button
        className="button"
        onClick={() => onClick()}
        type="button"
        style={{ backgroundColor: props.color }}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
