import "./Tasks.scss";
import React, { Component } from "react";
import {database} from "../../firestore-config";
import { collection, getDocs } from "firebase/firestore";
import TasksSidebar from "../../components/TasksSidebar/TasksSidebar";
import TasksMain from "../../components/TasksMain/TasksMain";

class TaskEntry
{
  constructor()
  {
    this.id = "";
    this.status = false;
    this.title = "Do a push up";
    this.text = "I can do it!";
    this.date = "01-01-2023";
    this.priority = 1;
    this.timeEstimate = 60;
    this.daysMissed = 0;
  }
}

class TaskGroup
{
  constructor()
  {
    this.id = "";
    this.userTasks = [];
    this.taskGroupTitle = "Sport";
  }
  //CreateTaskEntry();
  //UpdateGroupData();
}

class Tasks extends Component {
  constructor() {
    super();
    this.GetRemoteData = this.GetRemoteData.bind(this);
  }  
  state = {};
  render() {
    this.GetRemoteData();
    return (
      <div className="tasks">
        <TasksSidebar />
        <TasksMain />
      </div>
    );
  }

  async GetRemoteData(){
    try{
      const testTasksRef = collection(database, "users/testUser/tasks"); //Fetches Tasks collection which contains task groups as individual documents
      const testTaskGroupDOCS = await getDocs(testTasksRef);
      console.log(testTasksRef);
      console.log(testTaskGroupDOCS.docs[0].data());
    } catch {
      console.log("Failed to get task info");
    }
  }
}

export default Tasks;
