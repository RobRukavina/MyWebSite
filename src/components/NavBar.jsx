import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Contact from "./Contact";
import ReviewPage from "./ReviewPage";

class NavBar extends React.Component {
  render() {
    return (
      <Router>
        <nav
          className="navbar navbar-expand-lg"
          style={{ backgroundColor: "grey" }}
        >
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" style={{ color: "black" }} href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  style={{ color: "black" }}
                  href="/reviews"
                >
                  Reviews
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  style={{ color: "black" }}
                  href="/contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <Route path="/" exact component={HomePage} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/reviews" exact component={ReviewPage} />
      </Router>
    );
  }
}

export default NavBar;
