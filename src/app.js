import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

class App extends React.Component {
  handleTitleClick() {
    alert("you clicked this title");
  }
  render() {
    return React.createElement("div", {}, [
      React.createElement(
        "h1",
        { onClick: this.handleTitleClick },
        "Adopt a pet!"
      ),
      React.createElement(Pet, {
        name: "Dog1",
        animal: "Dog",
        breed: "German Spheard"
      }),
      React.createElement(Pet, {
        name: "Bird1",
        animal: "Bird",
        breed: "Sparrow"
      }),
      React.createElement(Pet, {
        name: "Cat1",
        animal: "Cat",
        breed: "Mixed"
      })
    ]);
  }
}

render(React.createElement(App), document.getElementById("root"));
