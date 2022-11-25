import "./DatePicker.scss";
import React from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";

/* 
TODO: add design, add button, add function
*/

const DatePicker = () => {
  return (
    <div className="date-picker">
      <header className="date-picker__header">Enter Date</header>
      <Input />
      <div className="date-picker__button-wrapper">
        <Button variant="text-only">Cancel</Button>
        <Button variant="text-only">OK</Button>
      </div>
    </div>
  );
};

export default DatePicker;
