import "./App.css";
import Person from "./Components/Person/Person";
import { Button } from "react-bootstrap";
import React, { Component } from "react";

class App extends Component {
  state = {
    show: false,
    fullName: "Cristiano Ronaldo",
    bio: "Professional footballer who plays as a forward for Serie A club Juventus and captains the Portugal national team.",
    profession: "Professional Football Player",
    imgSrc:
      "https://i.pinimg.com/originals/4e/1a/e7/4e1ae7a7131d12cf5660006e88755768.jpg",
    date: 0,
  };

  toggleShow = () => {
    this.setState({ show: !this.state.show });
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({ date: this.state.date + 1 });
    }, 1000);
  }

  render() {
    return (
      <div className="App">
        <Button variant="secondary" onClick={this.toggleShow}>
          {this.state.show ? "Hide" : "Show"}
        </Button>
        {this.state.show && <Person />}
        <h3>{this.state.date}</h3>
      </div>
    );
  }
}

export default App;
