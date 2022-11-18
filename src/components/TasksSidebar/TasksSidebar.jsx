import React from "react";
import Button from "../Button/Button";
import TasksSidebarTab from "../TasksSidebarTab/TasksSidebarTab";
import "./TasksSidebar.scss";

const TasksSidebar = ({ onButtonClick, onTabClick, tasksCounter }) => {
  return (
    <div className="tasks-sidebar">
      <div className="tasks-sidebar__button-wrapper">
        <Button onButtonClick={onButtonClick}>New Task Group</Button>
      </div>
      <div className="tasks-sidebar__tab-wrapper">
        {/* Placeholder Start */}
        <TasksSidebarTab
          type={"button"}
          tasksCount={tasksCounter}
          onTabClick={onTabClick}
        >
          School
        </TasksSidebarTab>
        <TasksSidebarTab
          type={"button"}
          tasksCount={tasksCounter}
          onTabClick={onTabClick}
        >
          Work
        </TasksSidebarTab>
        <TasksSidebarTab
          type={"button"}
          tasksCount={tasksCounter}
          onTabClick={onTabClick}
        >
          Personal
        </TasksSidebarTab>
        <TasksSidebarTab
          type={"button"}
          tasksCount={tasksCounter}
          onTabClick={onTabClick}
        >
          Finances
        </TasksSidebarTab>
        {/* Placeholder End */}
      </div>
    </div>
  );
};

export default TasksSidebar;
