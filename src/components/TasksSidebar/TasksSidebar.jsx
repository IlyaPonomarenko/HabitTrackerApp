import React from "react";
import Button from "../Button/Button";
import TasksSidebarTab from "../TasksSidebarTab/TasksSidebarTab";
import "./TasksSidebar.scss";

function TasksSidebar (props) {
  return (
    <div className="tasks-sidebar">
      <div className="tasks-sidebar__button-wrapper">
        <Button onButtonClick={props.onButtonClick} icon={"add"}>
          New Task Group
        </Button>
      </div>
      <div className="tasks-sidebar__tab-wrapper">
        {props.taskGroups.map((taskGroup, i) => <TasksSidebarTab key={i + 1}type={"button"} 
        tasksCounter={taskGroup.userTasks.length} icon={"school"} onTabClick={props.onTabClick} id={taskGroup.id}>
        {taskGroup.title}</TasksSidebarTab>)}
      </div>
    </div>
  );
};

export default TasksSidebar;
