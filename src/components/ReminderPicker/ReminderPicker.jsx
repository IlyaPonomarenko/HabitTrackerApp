import "./DatePicker.scss";
import React from "react";
import DateInput from "../TimeInput/TimeInput";
import Input from "../Input/Input";
import Button from "../Button/Button";

/* 
TODO: Design
*/

const DatePicker = () => {
  return (
    <div className="input-form">
      <header className="input-header">Enter Time</header>
      <DateInput />
      <header className="input-header">Enter Date</header>
      <Input />
      <div className="input-form__button-wrapper">
        <Button variant="text-only">Cancel</Button>
        <Button variant="text-only">OK</Button>
      </div>
    </div>
  );
};

export default DatePicker;
