import React from "react";
import Toggle from "../Toggle/Toggle";
import "./TasksHeader.scss";

const TasksHeader = ({ children, variant, showChildren, toggleHandler }) => {
  return (
    <div className="tasks-header">
      <h2 className="tasks-header__h2">{children}</h2>
      {variant && (
        <Toggle showChildren={showChildren} toggleHandler={toggleHandler} />
      )}
    </div>
  );
};

export default TasksHeader;
