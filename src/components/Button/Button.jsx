import React from "react";
import "./Button.scss";

/* Innitialized defaults for each value, will be overwritten if value is passed in */
const Button = ({
  onButtonClick,
  children = "button",
  type = "button",
  variant,
}) => {
  /* Checks if variant equals alert, if so adds className */
  variant = variant === "alert" ? "button--alert button" : "button";
  return (
    <button type={type} onClick={onButtonClick} className={variant}>
      <div className="button__icon">O</div>
      {/* TODO add google icon */}
      {children}
    </button>
  );
};

export default Button;
