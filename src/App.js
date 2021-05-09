import "./index.css";
import React, { useEffect } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import { bookDetails } from "./utils/bookDetails";
import AddNewBook from "./pages/AddNewBook";
import EditBook from "./pages/EditBook";
import Footer from "./components/Footer/Footer";
import Exception from "./components/Exception/Exception";
import DocumentTitle from "react-document-title";

/* Routing is added, default data is stored in local storage */

const App = () => {
  //storing data in local storage
  useEffect(() => {
    localStorage.setItem("bookDetails", JSON.stringify(bookDetails));
  }, []);

  return (
    <DocumentTitle title="E-Book">
      <Router>
        <div className="basic-container">
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/add" component={AddNewBook} />
            <Route exact path="/edit" component={EditBook} />
            <Route path="/exception" component={Exception} />
            <Route component={Exception} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </DocumentTitle>
  );
};

export default App;
