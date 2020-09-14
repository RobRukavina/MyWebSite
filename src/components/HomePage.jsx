import React from "react";
import MainPic from "../MainPic.jpg";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myData: {
        name: "Rob Rukavina",
        occupation: "Full Stack Developer",
        location: "Sandy, Utah",
      },
    };
  }
  render() {
    return (
      <div className="PageBody">
        <header>
          <h1>Welcome To My Website</h1>
          <div className="MainPicImageContainer">
            <img className="MainPic" src={MainPic} alt="#!"></img>
          </div>
          <div className="AboutMe">
            <h1>{this.state.myData.name}</h1>
            <h3>{this.state.myData.occupation}</h3>
            <h3>{this.state.myData.location}</h3>
          </div>
        </header>
        <div>
          <h1>About Me</h1>
          <p>Lorem Ipsum</p>
        </div>
      </div>
    );
  }
}

export default HomePage;
