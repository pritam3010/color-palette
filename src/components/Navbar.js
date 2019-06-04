import "rc-slider/assets/index.css";
import "./styles/Navbar.css";

import React, { Component } from "react";
import Slider from "rc-slider/lib/Slider";

class Navbar extends Component {
  render() {
    const { level, changeLevel } = this.props;
    return (
      <header className="Navbar">
        <div className="logo">
          <a href="#">Color Picker</a>
        </div>
        <div className="slider-continer">
          <span>Level: {level}</span>
          <div className="slider">
            <Slider
              defaultValue={level}
              min={100}
              max={900}
              step={100}
              onChange={changeLevel}
            />{" "}
          </div>
        </div>
      </header>
    );
  }
}

export default Navbar;
