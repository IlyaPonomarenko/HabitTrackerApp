import "./TasksTask.scss";
import React, { useState } from "react";
import Button from "../Button/Button";
import Checkbox from "../Checkbox/Checkbox";
import PriorityPicker from "../PriorityPicker/PriorityPicker";

const TasksTask = ({
  taskDate = "Enter Date Here",
  taskTitle = "Task Title",
  taskIsActive = true,
  taskContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quasi blanditiis id quisquam repellendus ipsa iusto fugit laboriosam, ad nostrum.",
  taskDaysMissed = 3,
}) => {
  const [showTask, setShowTask] = useState(true);
  const showTaskHandler = () => {
    setShowTask(!showTask);
  };
  return (
    <div className={showTask ? "task--active" : "task"}>
      <div className="task__header">
        <Checkbox />
        <div className="task__title" onClick={showTaskHandler}>
          <span className="task__label">{taskDate}</span>
          <h3 className="task__h3">{taskTitle}</h3>
        </div>
        <div className="task__trailing">
          <div className="task__dot"></div>

          {showTask ? (
            <span className="material-icons" onClick={showTaskHandler}>
              arrow_drop_down
            </span>
          ) : (
            <span className="material-icons" onClick={showTaskHandler}>
              arrow_right
            </span>
          )}
        </div>
        {/* Change arrow icon if task is active */}
      </div>
      {/* Display content if task is active */}
      {showTask && (
        <>
          <div className="task__content">{taskContent}</div>
          <div className="task__buttons-wrapper">
            <PriorityPicker />
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
