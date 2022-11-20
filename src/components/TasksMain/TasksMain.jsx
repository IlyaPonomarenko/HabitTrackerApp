import "./TasksMain.scss";
import React, { Component } from "react";
import TasksHeader from "../TasksHeader/TasksHeader";
import Button from "../Button/Button";
import TasksTask from "../TasksTask/TasksTask";

class TasksMain extends Component {
  render() {
    return (
      <div className="tasks-main">
        <div className="tasks-main__button-wrapper">
          <Button icon={"add"}>New Task</Button>
        </div>
        <TasksHeader variant={"toggle"}>Tasks</TasksHeader>
        <TasksTask />
      </div>
    );
  }
}

export default TasksMain;
