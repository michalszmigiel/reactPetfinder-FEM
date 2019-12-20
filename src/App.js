import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Petfinder</h1>
        <Pet name="Juniś" animal="Dog" breed="pintcher" />
        <Pet name="Doink" animal="Cat" breed="mixed" />
        <Pet name="Pepper" animal="Bird" breed="cockatiel" />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
