import React, { useState } from "react";
import HabitGroup from "../../components/HabitGroup/HabitGroup";
import Button from "../../components/Button/Button";
import "./Habits.scss";

const Habits = () => {
  const [components, setComponents] = useState([]);

  const createNewGroup = () => {
    setComponents([...components, "New habit group"]);
  };

  return (
    <div className="habits-frame">
      <div className="habits-tab">
        <div className="habits-tab__headline">
          <h2 className="h1-habit">Your Habits</h2>
          <Button onButtonClick={createNewGroup} icon={"add"}>
            new group
          </Button>
        </div>
        {components.map((item, i) => (
          <HabitGroup key={i} name={item} />
        ))}
      </div>
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
  );
};
export default Habits;
