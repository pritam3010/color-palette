import React, { Component } from "react";

import Palette from "./Palette";
import seedColors from "./seedColor";

class App extends Component {
  render() {
    return (
      <div>
        <div>Hello There!</div>
        <Palette {...seedColors[2]} />
      </div>
    );
  }
}

export default App;
