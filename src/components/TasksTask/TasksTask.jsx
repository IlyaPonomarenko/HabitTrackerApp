import "./TasksTask.scss";
import React from "react";
import Button from "../Button/Button";
import Checkbox from "../Checkbox/Checkbox";

const TasksTask = ({
  taskDate = "Enter Date Here",
  taskTitle = "Task Title",
  taskIsActive = true,
  onTaskClick,
  taskContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quasi blanditiis id quisquam repellendus ipsa iusto fugit laboriosam, ad nostrum.",
  taskDaysMissed = 3,
}) => {
  return (
    <div className="task" onClick={onTaskClick}>
      <div className="task__header">
        <Checkbox />
        <div className="task__title">
          <span className="task__label">{taskDate}</span>
          <h3 className="task__h3">{taskTitle}</h3>
        </div>
        <div className="task__trailing">
          <div className="task__dot"></div>

          {taskIsActive ? (
            <span className="material-icons">arrow_drop_down</span>
          ) : (
            <span className="material-icons">arrow_right</span>
          )}
        </div>
        {/* Change arrow icon if task is active */}
      </div>
      {/* Display content if task is active */}
      {taskIsActive && (
        <>
          <div className="task__content">{taskContent}</div>
          <div className="task__buttons-wrapper">
            <Button icon={"import_export"}>Priority</Button>
            <Button icon={"calendar_month"}>Add Date</Button>
            <Button icon={"bookmark"}>Remind Me</Button>
            <Button icon={"timer"}>Length of task</Button>
          </div>
        </>
      )}
    </div>
  );
};

export default TasksTask;
