import "./DatePicker.scss";
import React from "react";
import DateInput from "../TimeInput/DateInput";
import Button from "../Button/Button";

/* 
TODO: Design
*/

const DatePicker = () => {
  return (
    <div className="input-form">
      <header className="input-header">Enter Date</header>
      <DateInput />
      <div className="input-form__button-wrapper">
        <Button variant="text-only">Cancel</Button>
        <Button variant="text-only">OK</Button>
      </div>
    </div>
  );
};

export default DatePicker;
