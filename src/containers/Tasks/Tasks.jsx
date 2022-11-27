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
  constructor(id="", TasksRef)
  {
    this.tasksRef = TasksRef;
    this.id = id;
    this.userTasks = [new TaskEntry()];// :: DEBUG ::
    this.title = "Sport"
  }
  CreateTaskEntry(){
    this.userTasks = [...this.userTasks, new TaskEntry()];
    console.log(`New task created, task list: ${this.userTasks}`);
    // WIP Send to remote (taskList: arrayUnion(task))
    // find appropriate document in taskdocs and updt. OR save document inside group (kinda better)
    this.tasksRef.forceUpdate()
  };
  //UpdateGroupData();
}

class Tasks extends Component {
  constructor() {
    super();
    this.taskDocuments = [];
    this.CreateTaskGroup = this.CreateTaskGroup.bind(this);
    this.UpdateRemote = this.UpdateRemote.bind(this);
    this.RenderSelectedGroup = this.RenderSelectedGroup.bind(this);
    this.SelectTaskGroup = this.SelectTaskGroup.bind(this);
    this.state = {
      taskGroups : [new TaskGroup("testoPatronum", this)], // :: DEBUG ::
      selectedTaskGroup : null
    };
  }
  
  render() {
    return (
      <div className="tasks">
        <TasksSidebar taskGroups={this.state.taskGroups} onButtonClick={this.CreateTaskGroup} onTabClick={this.SelectTaskGroup}/>
        <this.RenderSelectedGroup />
      </div>
    );
  }

  // :: CLASS FUNCTIONALITY ::

  SelectTaskGroup(id)
  {
    try{
      const tempGroup = this.state.taskGroups.find(group => group.id == id);
      this.setState({selectedTaskGroup : tempGroup});}
    catch{
      console.log("Could not select group task :: SELECT GROUP TASK :: ")
    }
  }

  RenderSelectedGroup(){
    if(this.state.selectedTaskGroup == null)
      console.log("No group selected :: RENDER SELECTED GROUP ::")
    else {
      return <TasksMain selectedGroup={this.state.selectedTaskGroup} requestUpdate={this.RequestUpdate}/>
    }
  }

  // :: BACKEND CONTROLS ::
  async CreateTaskGroup()
  {
    const newTaskGroup = doc(collection(database, "users", "testUser", "tasks"));
    this.taskDocuments = [...this.taskDocuments, newTaskGroup];
    this.setState({taskGroups : [...this.state.taskGroups, new TaskGroup(newTaskGroup.id, this)]});
  }

  async UpdateRemote(taskDocuments) // WIP
  {
    this.state.taskGroups.forEach(function(group){
      try{
        const tempDoc = taskDocuments.find(doc => doc.id === group.id)
        const testTaskGroupData = {
              title: "Sport",
              testTask: {
                id: 5,
                status: false,
                title: "jogging",
                text: "gotta go fast"
              }}
        setDoc(tempDoc, testTaskGroupData, {merge : true});// Continue here, update remote (update each groups' tasks)
      }
      catch{
        console.log(`"didn't found a doc with given ID :: UPDATE REMOTE :: ${group.id}`)
      }
    });
  }

  // :: COMPONENT UPDT. CONTROLS ::
  componentDidUpdate()
  {
    this.UpdateRemote(this.taskDocuments);
  }
}

export default Tasks;
