import "./ReminderPicker.scss";
import React from "react";
import TimeInput from "../TimeInput/TimeInput";
import Input from "../Input/Input";
import Button from "../Button/Button";

/* 
TODO: Design
*/

const DatePicker = () => {
  return (
    <div className="datePicker">
      <header className="datePicker__header">Enter Time</header>
      <TimeInput />
      <header className="datePicker__header">Enter Date</header>
      <Input />
      <div className="datePicker__button-wrapper">
        <Button variant="text-only">Cancel</Button>
        <Button variant="text-only">OK</Button>
      </div>
    </div>
  );
};

export default DatePicker;
