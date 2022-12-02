import "./ReminderPicker.scss";
import React, { useRef, useState } from "react";
import TimeInput from "../TimeInput/TimeInput";
import Input from "../Input/Input";
import Button from "../Button/Button";

/* 
TODO: Design
*/

const DatePicker = () => {
  const [isOpen, setIsOpen] = useState(false);
  /* Retrieving clicked option */
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);

  const isOpenHandler = () => setIsOpen(!isOpen);

  const dateRef = useRef(null);
  const minuteRef = useRef(null);
  const hourRef = useRef(null);

  const onSubmit = () => {
    setDate(dateRef.current.value);
    setTime(`${hourRef.current.value}:${minuteRef.current.value}`);
    setIsOpen(false);
    console.log(date, time);
  };

  return (
    <div className="date-picker">
      <Button icon={"bookmark"} onButtonClick={isOpenHandler}>
        {date && time ? `${date} at ${time}` : "Reminder"}
      </Button>
      {isOpen && (
        <div className="date-picker__container">
          <header className="date-picker__header">Enter Time</header>
          <TimeInput minuteRef={minuteRef} hourRef={hourRef} />
          <header className="date-picker__header">Enter Date</header>
          <Input inputRef={dateRef} />
          <div className="date-picker__button-wrapper">
            <Button variant="text-only" onButtonClick={isOpenHandler}>
              Cancel
            </Button>
            <Button variant="text-only" onButtonClick={onSubmit}>
              OK
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DatePicker;
