import "./Tasks.scss";
import React, { Component } from "react";
import { database, tasks_collection } from "../../firestore-config";
import { collection, doc, setDoc } from "firebase/firestore"; 
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
  constructor(id = "")
  {
    this.id = id;
    this.userTasks = [];
    this.title = "Sport"
  }
  //CreateTaskEntry();
  //UpdateGroupData();
}

class Tasks extends Component {
  constructor() {
    super();
    this.taskDocuments = [];
    this.CreateTaskGroup = this.CreateTaskGroup.bind(this);
    this.UpdateRemote = this.UpdateRemote.bind(this);
    this.state = {
      taskGroups : [],
      selectedTaskGroup : null
    };
  }  
  
  render() {
    return (
      <div className="tasks">
        <TasksSidebar onButtonClick={this.CreateTaskGroup}/>
        <TasksMain />
      </div>
    );
  }

  async CreateTaskGroup()
  {
    const newTaskGroup = doc(collection(database, "users", "testUser", "tasks"));
    this.taskDocuments = [...this.taskDocuments, newTaskGroup];
    this.setState({taskGroups : [...this.state.taskGroups, new TaskGroup(newTaskGroup.id)]});
  }

  async UpdateRemote(taskDocuments)
  {
    this.state.taskGroups.forEach(function(group){
      const tempDoc = taskDocuments.find(doc => doc.id === group.id)
      setDoc(tempDoc, {
        id: group.id,
        title: group.title
      }, {merge : true});
    });
  }

  componentDidUpdate()
  {
    this.UpdateRemote(this.taskDocuments); 
  }
}

export default Tasks;
