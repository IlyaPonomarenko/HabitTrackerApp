import React from "react";
import Toggle from "../Toggle/Toggle";
import "./TasksHeader.scss";

const TasksHeader = ({ children, variant, toggleIsActive, onToggleClick }) => {
  return (
    <div className="tasks-header">
      <h2 className="tasks-header__h2">{children}</h2>
      {variant && (
        <Toggle onToggleClick={onToggleClick} toggleActive={toggleIsActive} />
      )}
    </div>
  );
};

export default TasksHeader;
