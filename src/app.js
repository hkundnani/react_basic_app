import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

class App extends React.Component {
  handleTitleClick() {
    alert("you clicked this title");
  }
  render() {
    return (
      <div>
        <h1>Adopt Me!</h1>
        <Pet name="Dog1" animal="Dog" breed="German Sephard" />
        <Pet name="Bird1" animal="Bird" breed="Sparrow" />
        <Pet name="Cat1" animal="Cat" breed="Mixed" />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
