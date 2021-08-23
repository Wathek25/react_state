import React, { Component } from "react";
import "./Person.css";
class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "Cristiano Ronaldo",
      bio: "Professional footballer who plays as a forward for Serie A club Juventus and captains the Portugal national team.",
      profession: "Professional Football Player",
      imgSrc:
        "https://i.pinimg.com/originals/4e/1a/e7/4e1ae7a7131d12cf5660006e88755768.jpg",
      date: 0,
      // state2: "hi",
    };
  }
  render() {
    return (
      <div>
        <h2>Person details</h2>
        <p>{this.state.fullName}</p>
        <p>{this.state.profession}</p>
        <p>{this.state.bio}</p>
        <img src={this.state.imgSrc} alt="ronaldo" className="image"></img>
      </div>
    );
  }
}

export default Person;
