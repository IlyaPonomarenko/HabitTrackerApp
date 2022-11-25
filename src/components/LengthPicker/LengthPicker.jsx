import "./LengthPicker.scss";
import React from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";

/* 
TODO: Design
*/

const LengthPicker = () => {
  return (
    <div className="input-form">
      <header className="input-header">Enter time</header>
      <Input />
      <div className="input-form__button-wrapper">
        <Button variant="text-only">Cancel</Button>
        <Button variant="text-only">OK</Button>
      </div>
    </div>
  );
};

export default LengthPicker;
