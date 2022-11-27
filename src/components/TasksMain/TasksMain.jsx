import "./TasksMain.scss";
import React, { Component } from "react";
import TasksHeader from "../TasksHeader/TasksHeader";
import Button from "../Button/Button";
import TasksTask from "../TasksTask/TasksTask";

function TasksMain(props) {
  return (
    <div className="tasks-main">
      <div className="tasks-main__button-wrapper">
        <Button icon={"add"} onButtonClick={function(){
          props.selectedGroup.CreateTaskEntry()}}>New Task</Button>
      </div>
      <TasksHeader variant={"toggle"}>Tasks</TasksHeader>
      {props.selectedGroup.userTasks.map((task, i) => <TasksTask key={i + 1} taskDate={task.date} taskTitle={task.title}
                                                taskIsActive={task.status} onTaskClick={props.onTaskClick}
                                                taskContent={task.text} taskDaysMissed={task.daysMissed}/>)}
    </div>
  );
}

export default TasksMain;