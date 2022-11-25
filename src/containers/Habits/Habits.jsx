import React, { Component } from "react";
import HabitGroup from "../../components/HabitGroup/HabitGroup";
import Button from "../../components/Button/Button"
import "./Habits.scss";

class Habits extends Component {
  state={
    habitGroups:[],

  };

  createNewGroup (){

  }
  render() {
    return (
      
      <div className="habits-frame">
        <div className="habits-tab">
          <div className="habits-tab__headline">
          <h2 className="h1-habit">All Habits</h2>
            <Button onClick={this.createNewGroup} icon={"add"}>new group</Button>         
          </div>
          <HabitGroup></HabitGroup>
          <HabitGroup></HabitGroup>
        </div>
        <div className="habits-calendar">
          <div className="habits-calendar__weekdays">
            <div className="day">Mon</div>
            <div className="day">Thu</div>
            <div className="day">Wen</div>
            <div className="day">Tue</div>
            <div className="day">Fri</div>
            <div className="day">Sat</div>
            <div className="day">Sun</div>
          </div>
        </div>
      </div>
    );
  }
}
export default Habits;
