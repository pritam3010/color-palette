import "rc-slider/assets/index.css";
import "./styles/Palette.css";

import React, { Component } from "react";
import Slider from "rc-slider/lib/Slider";
// import Range from 'rc-slider/lib/Range';

import ColorBox from "./ColorBox";

class Palette extends Component {
  state = {
    level: 500
  };

  changeLevel = level => {
    console.log(level);
    this.setState({ level });
  };
  render() {
    const { colors } = this.props.palette;
    const { level } = this.state;
    const colorBoxes = colors[level].map(color => (
      <ColorBox background={color.hex} name={color.name} />
    ));
    return (
      <div className="Palette">
        <div className="slider">
          <Slider
            defaultValue={level}
            min={100}
            max={900}
            step={100}
            onChange={this.changeLevel}
          />
        </div>
        {/* Navbar goes here */}
        <div className="Palette-colors">{colorBoxes}</div>
        {/* footer */}
      </div>
    );
  }
}

export default Palette;
