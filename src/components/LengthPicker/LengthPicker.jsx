import "./LengthPicker.scss";
import React from "react";
import TimeInput from "../TimeInput/TimeInput";
import Button from "../Button/Button";

/* 
TODO: Design
*/

const LengthPicker = () => {
  return (
    <div className="length-picker">
      <header className="length-picker__header">Enter time</header>
      <TimeInput />
      <div className="length-picker__button-wrapper">
        <Button variant="text-only">Cancel</Button>
        <Button variant="text-only">OK</Button>
      </div>
    </div>
  );
};

export default LengthPicker;
