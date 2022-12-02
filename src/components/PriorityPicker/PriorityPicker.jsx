import "./PriorityPicker.scss";
import React, { useState } from "react";
import Button from "../Button/Button";

const PriorityPicker = () => {
  /* Open and close priority picker */
  const [isOpen, setIsOpen] = useState(false);
  /* Retrieving clicked option */
  const [selectedOption, setSelectedOption] = useState(null);

  const isOpenHandler = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
  };
  /* Priority Options */
  const options = ["very important", "important", "normal", "not important"];
  return (
    <div className="priority-picker">
      <Button icon={"import_export"} onButtonClick={isOpenHandler}>
        {selectedOption || "Priority"}
      </Button>
      {isOpen && (
        <div className="priority-picker__dropdown-list">
          {options.map((option) => (
            <div
              key={Math.random()}
              value="very-important"
              className="priority-picker__list-item"
              onClick={onOptionClicked(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PriorityPicker;
