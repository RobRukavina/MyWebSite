import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Contact from "./Contact";

class NavBar extends React.Component {
  render() {
    return (
      <Router>
        <div className="NavBarRow">
          <nav>
            <a href="/">Home</a>
          </nav>
          <nav>
            <a href="/contact">Contact</a>
          </nav>
        </div>
        <Route path="/" exact component={HomePage} />
        <Route path="/contact" exact component={Contact} />
      </Router>
    );
  }
}

export default NavBar;
