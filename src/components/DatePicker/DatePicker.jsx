import "./DatePicker.scss";
import React, { useRef, useState } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";

/* 
TODO: add design, add button, add function
*/

const DatePicker = () => {
  /* Open and close priority picker */
  const [isOpen, setIsOpen] = useState(false);
  /* Retrieving clicked option */
  const [date, setDate] = useState(null);
  const inputRef = useRef(null);

  const isOpenHandler = () => setIsOpen(!isOpen);
  const dateHandler = () => {
    setDate(inputRef.current.value);
    setIsOpen(false);
    console.log(inputRef.current.value);
    console.log(date);
  };

  return (
    <div className="date-picker">
      <Button icon={"calendar_month"} onButtonClick={isOpenHandler}>
        {date || "Due Date"}
      </Button>
      {isOpen && (
        <div className="date-picker__container">
          <header className="date-picker__header">Enter Date</header>
          <Input inputRef={inputRef} variant={"date"} />
          <div className="date-picker__button-wrapper">
            <Button onButtonClick={isOpenHandler} variant="text-only">
              Cancel
            </Button>
            <Button onButtonClick={dateHandler} variant="text-only">
              OK
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DatePicker;
