import React, { Component } from "react";
import { Link } from "react-router-dom";

import MiniPalette from "./MiniPalette";

class PaletteList extends Component {
  render() {
    const { palette } = this.props;
    return (
      <div>
        <h1>React Colors</h1>
        {palette.map(palette => (
          <MiniPalette {...palette} />
        ))}
      </div>
    );
  }
}

export default PaletteList;
