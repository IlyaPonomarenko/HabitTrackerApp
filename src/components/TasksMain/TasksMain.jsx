import "./TasksMain.scss";
import React from "react";
import TasksHeader from "../TasksHeader/TasksHeader";
import Button from "../Button/Button";

const TasksMain = () => {
  return (
    <div className="tasks-main">
      <div className="tasks-main__button-wrapper">
        <Button icon={"add"}>New Task</Button>
      </div>
      <TasksHeader variant={"toggle"}>Important</TasksHeader>
    </div>
  );
};

export default TasksMain;
