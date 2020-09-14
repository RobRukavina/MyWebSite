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
            <h3>
              {this.state.myData.occupation} in {this.state.myData.location}
            </h3>
          </div>
        </header>
        <div>
          <h1>About Me</h1>
          <p className="Description">
            I am a Full Stack Developer with experience in developing a startup
            from end to end. Most of my experience is in React, C#/.NET, and SQL
            Server but I am currently learning Angular to add that to my stack.
            I am always looking to learn something new! In 2018 I became a
            Mentor for the Salt Lake County 3rd District Veterans Treatment
            Court. Helping struggling veterans put their lives back together is
            really an amazing experience. In my free time I like to go camping,
            ride my motorcycle, and work on the many projects I have around the
            house.
          </p>
        </div>
      </div>
    );
  }
}

export default HomePage;
