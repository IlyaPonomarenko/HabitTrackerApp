import React from "react";
import "./TasksHeader.scss";

const TasksHeader = ({ children, variant }) => {
  variant =
    variant === "toggle"
      ? "tasks-header__toggle"
      : "tasks-header__toggle--hidden";
  return (
    <div className="tasks-header">
      <h2 className="tasks-header__h2">{children}</h2>
      <div className={variant}>
        <div className="tasks-header__toggle-knob"></div>
      </div>
    </div>
  );
};

export default TasksHeader;
