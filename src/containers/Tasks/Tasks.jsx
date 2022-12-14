import "./Tasks.scss";
import React, { Component } from "react";
// eslint-disable-next-line
import { database, tasks_collection } from "../../firestore-config";
import { arrayUnion, collection, doc, setDoc } from "firebase/firestore";
import TasksSidebar from "../../components/TasksSidebar/TasksSidebar";
import TasksMain from "../../components/TasksMain/TasksMain";

// eslint-disable-next-line
class TaskEntry {
  constructor() {
    this.id = "test";
    this.status = false;
    this.title = "Do a push up";
    this.text = "I can do it!";
    this.date = "01-01-2023";
    this.priority = 1;
    this.timeEstimate = 60;
    this.daysMissed = 0;
  }
}
// eslint-disable-next-line
class TaskGroup {
  constructor(id = "", TasksRef) {
    this.tasksRef = TasksRef;
    this.id = id;
    this.userTasks = [new TaskEntry()]; // :: DEBUG ::
    this.title = "Sport";
  }
  CreateTaskEntry() {
    const taskEntryRef = new TaskEntry();
    this.userTasks = [...this.userTasks, taskEntryRef];
    this.tasksRef.UpdateJSON(this.id, {
      id: taskEntryRef.id,
      status: taskEntryRef.status,
      title: taskEntryRef.title,
      text: taskEntryRef.text,
      date: taskEntryRef.date,
      priority: taskEntryRef.priority,
      timeEstimate: taskEntryRef.timeEstimate,
      daysMissed: taskEntryRef.daysMissed,
    });
    this.tasksRef.forceUpdate();
  }
}
// eslint-disable-next-line
class Tasks extends Component {
  constructor() {
    super();
    this.taskDocuments = [];
    this.CreateTaskGroup = this.CreateTaskGroup.bind(this);
    this.RenderSelectedGroup = this.RenderSelectedGroup.bind(this);
    this.SelectTaskGroup = this.SelectTaskGroup.bind(this);
    this.UpdateJSON = this.UpdateJSON.bind(this);
    this.state = {
      taskGroups: [new TaskGroup("testTaskGroup", this)], // :: DEBUG ::
      selectedTaskGroup: null,
    };
  }

  render() {
    return (
      <div className="tasks">
        <TasksSidebar
          taskGroups={this.state.taskGroups}
          onButtonClick={this.CreateTaskGroup}
          onTabClick={this.SelectTaskGroup}
        />
        <this.RenderSelectedGroup />
      </div>
    );
  }

  // :: CLASS FUNCTIONALITY ::
  SelectTaskGroup(id) {
    try {
      // eslint-disable-next-line
      const tempGroup = this.state.taskGroups.find((group) => group.id == id);
      this.setState({ selectedTaskGroup: tempGroup });
    } catch {
      console.log("Could not select group task :: SELECT GROUP TASK :: ");
    }
  }

  RenderSelectedGroup() {
    if (this.state.selectedTaskGroup == null)
      console.log("No group selected :: RENDER SELECTED GROUP ::");
    else {
      return (
        <TasksMain
          selectedGroup={this.state.selectedTaskGroup}
          requestUpdate={this.RequestUpdate}
        />
      );
    }
  }

  // :: BACKEND CONTROLS ::
  async CreateTaskGroup() {
    const newTaskGroup = doc(
      collection(database, "users", "testUser", "tasks")
    );
    this.taskDocuments = [...this.taskDocuments, newTaskGroup];
    this.setState({
      taskGroups: [
        ...this.state.taskGroups,
        new TaskGroup(newTaskGroup.id, this),
      ],
    });
  }

  //[FUTURE FUNCTIONALITY] Will push data to JSON file, [DEBUG] Right now I use it chuck data directly into FireStore [DEBUG]
  UpdateJSON(
    groupID,
    task // third parameter should be taskID (for updating only one task)
  ) {
    // eslint-disable-next-line
    const groupDocRef = this.taskDocuments.find((group) => group.id == groupID);
    setDoc(groupDocRef, {
      tasks: arrayUnion(task),
    });
  }

  // :: COMPONENT UPDT. CONTROLS ::
  componentDidMount() {
    this.taskDocuments[0] = doc(database, "users/testUser/tasks/testTaskGroup");
  }
}

export default Tasks;
