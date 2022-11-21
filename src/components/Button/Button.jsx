import React from "react";
import "./Button.scss";

/* Innitialized defaults for each value, will be overwritten if value is passed in */
const Button = ({
  onButtonClick,
  children = "button",
  type = "button",
  variant,
  icon,
}) => {
  /* Checks if variant equals alert, if so adds className */
  variant =
    variant === "alert"
      ? "button--alert button"
      : variant === "primary"
      ? "button--primary button"
      : variant === "text-only"
      ? "button--text-only button"
      : "button";
  return (
    <button type={type} onClick={onButtonClick} className={variant}>
      <span className="material-icons">{icon}</span>
      {children}
    </button>
  );
};

export default Button;
