import "./TasksTask.scss";
import React, { useState } from "react";
import Checkbox from "../Checkbox/Checkbox";
import PriorityPicker from "../PriorityPicker/PriorityPicker";
import DatePicker from "../DatePicker/DatePicker";
import ReminderPicker from "../ReminderPicker/ReminderPicker";
import TimePicker from "../TimePicker/TimePicker";

/* 
TODO: prevent double click on checkbox from opening/closing task
*/

const TasksTask = ({
  taskDate = "Enter Date Here",
  taskTitle = "Task Title",
  taskIsActive = true,
  taskContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quasi blanditiis id quisquam repellendus ipsa iusto fugit laboriosam, ad nostrum.",
  taskDaysMissed = 3,
}) => {
  const [showTask, setShowTask] = useState(false);
  const showTaskHandler = () => {
    setShowTask(!showTask);
  };
  return (
    <>
      {showTask ? (
        <div className={showTask ? "task--active" : "task"}>
          <div className="task__header" onDoubleClick={showTaskHandler}>
            <Checkbox />
            <div className="task__title">
              <span className="task__label">{taskDate}</span>
              <input className="task__h3" defaultValue={taskTitle} />
            </div>
            <div className="task__trailing">
              <div className="task__dot"></div>

              {showTask ? (
                <span className="material-icons">arrow_drop_down</span>
              ) : (
                <span className="material-icons">arrow_right</span>
              )}
            </div>
            {/* Change arrow icon if task is active */}
          </div>
          <textarea className="task__content" defaultValue={taskContent} />
          <div className="task__buttons-wrapper">
            <PriorityPicker />
            {/* <Button icon={"calendar_month"}>Add Date</Button> */}
            <DatePicker />
            {/* <Button icon={"bookmark"}>Remind Me</Button> */}
            <ReminderPicker />
            {/* <Button icon={"timer"}>Length of task</Button> */}
            <TimePicker />
          </div>
        </div>
      ) : (
        <div className={showTask ? "task--active" : "task"}>
          <div className="task__header" onDoubleClick={showTaskHandler}>
            <Checkbox />
            <div className="task__title">
              <span className="task__label">{taskDate}</span>
              <h3 className="task__h3">{taskTitle}</h3>
            </div>
            <div className="task__trailing">
              <div className="task__dot"></div>

              {showTask ? (
                <span className="material-icons">arrow_drop_down</span>
              ) : (
                <span className="material-icons">arrow_right</span>
              )}
            </div>
            {/* Change arrow icon if task is active */}
          </div>
          {/* Display content if task is active */}
        </div>
      )}
    </>
  );
};

export default TasksTask;
