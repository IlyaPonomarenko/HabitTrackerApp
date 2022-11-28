import React from "react";
import "./Busy.scss";

const Busy = (props) => {
  return (
    <div className="busyContainer">
      <div>
        <h4>How overwhelmed/busy are you?</h4>
      </div>
      <div className="busyContainer__value">
        <span>{props.mood}</span>
      </div>
      <input
        className="busyContainer__busyBar"
        type="range"
        min="0"
        max="100"
        value={props.busy}
      />
    </div>
  );
};
export default Busy;
