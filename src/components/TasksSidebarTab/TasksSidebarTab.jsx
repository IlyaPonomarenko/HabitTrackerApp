import React from "react";
import "./TasksSidebarTab.scss";

/* Innitialized defaults for each value, will be overwritten if value is passed in */
const TasksSidebarTab = ({
  onTabClick,
  children = "Tasks Sidebar Tab",
  type = "button",
  tasksCounter = "123",
  icon = "circle",
  id,
}) => {
  return (
    <button className="tasks-sidebar-tab" onClick={onTabClick.bind(this, id)} type={type}>
      <div className="tasks-sidebar-tab__wrapper">
        <span className="material-icons">{icon}</span>
        {/* Displays button text */}
        <div className="tasks-sidebar-tab__children">{children}</div>
      </div>
      {tasksCounter} {/* Displays number of tasks */}
    </button>
  );
};

export default TasksSidebarTab;
