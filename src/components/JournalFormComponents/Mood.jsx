import React, { Component } from "react";
import { Range } from "react-range";
import "./Mood.scss";

class Mood extends Component {
  state = { values: [70] };
  render() {
    return (
      <div className="moodContainer">
        <div>
          <h4>How is your mood?</h4>
        </div>
        <div className="moodContainer__value">
          <span>{this.state.values}</span>
        </div>
        <Range
          step={0.1}
          min={0}
          max={100}
          values={this.state.values}
          onChange={(values) => this.setState({ values })}
          renderTrack={({ props, children }) => (
            <div className="moodContainer__moodBar" {...props}>
              {children}
            </div>
          )}
          renderThumb={({ props }) => (
            <div className="moodContainer__moodThumb" {...props} />
          )}
        />{" "}
      </div>
    );
  }
}
export default Mood;
