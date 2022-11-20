import "./Tasks.scss";
import React, { Component } from "react";
import TasksSidebar from "../../components/TasksSidebar/TasksSidebar";
import TasksMain from "../../components/TasksMain/TasksMain";

class Tasks extends Component {
  state = {};
  render() {
    return (
      <div className="tasks">
        <TasksSidebar />
        <TasksMain />
      </div>
    );
  }
}

export default Tasks;
