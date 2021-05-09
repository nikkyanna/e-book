import React from "react";
import Page from "../components/AddAndEdit/Page";

/* Component creates a new book , added to the exsisting datas */

class AddNewBook extends React.Component {
  render() {
    return (
      <div>
        <Page newEntry={true} />
      </div>
    );
  }
}

export default AddNewBook;
