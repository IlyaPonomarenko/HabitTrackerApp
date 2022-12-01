import React from "react";
import "./DeleteButton.scss";

/* Innitialized defaults for each value, will be overwritten if value is passed in */
const DeleteButton = ({
  onButtonClick,
  children = "button",
  type = "button",
  variant,
  icon,
}) => {
  /* Checks if variant equals alert, if so adds className */
  variant = variant === "alert" ? "button--alert button" : "button";
  return (
    <button onClick={onButtonClick} className="delete">
      <span className="material-icons">{(icon = "delete")}</span>
    </button>
  );
};

export default DeleteButton;
