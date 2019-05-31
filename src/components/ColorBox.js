import "./styles/ColorBox.css";

import React, { Component } from "react";

class ColorBox extends Component {
  render() {
    return (
      <div
        style={{ backgroundColor: this.props.background }}
        className="ColorBox"
      >
        <span>{this.props.name}</span>
        <span>More</span>
      </div>
    );
  }
}
export default ColorBox;
