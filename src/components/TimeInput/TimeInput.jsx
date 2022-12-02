import "./TimeInput.scss";
import React from "react";

const TimeInput = ({ minuteRef, hourRef }) => {
  /* 
  TODO: set max length and number of input
  */

  return (
    <div className="time-input">
      <div className="time-input__wrapper">
        <input
          className="time-input__number"
          name="hour"
          type="number"
          min="1"
          max="24"
          maxLength="2"
          ref={hourRef}
        />
        <label className="time-input__label" htmlFor="input-hours">
          Hours
        </label>
      </div>
      <span className="time-input__span">:</span>
      <div className="time-input__wrapper">
        <input
          className="time-input__number"
          name="minutes"
          type="number"
          min="1"
          max="60"
          maxLength="2"
          ref={minuteRef}
        />
        <label className="time-input__label" htmlFor="input-minutes">
          Minutes
        </label>
      </div>
    </div>
  );
};

export default TimeInput;
