import "./TimePicker.scss";
import React, { useRef, useState } from "react";
import TimeInput from "../TimeInput/TimeInput";
import Button from "../Button/Button";

/* 
TODO: Design
*/

const TimePicker = () => {
  const [isOpen, setIsOpen] = useState(false);
  /* Retrieving clicked option */
  const [minute, setMinute] = useState(null);
  const [hour, setHour] = useState(null);

  const isOpenHandler = () => setIsOpen(!isOpen);

  const minuteRef = useRef(null);
  const hourRef = useRef(null);

  const onSubmit = () => {
    setMinute(minuteRef.current.value);
    setHour(hourRef.current.value);
    setIsOpen(false);
    console.log(hour, minute);
  };
  return (
    <div className="time-picker">
      <Button icon={"timer"} onButtonClick={isOpenHandler}>
        {hour || minute ? `${hour} h, ${minute} min` : "Length of Task"}
      </Button>
      {isOpen && (
        <div className="time-picker__container">
          <header className="time-picker__header">Enter Date</header>
          <TimeInput minuteRef={minuteRef} hourRef={hourRef} />
          <div className="time-picker__button-wrapper">
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

export default TimePicker;
