import React, { useState } from "react";
import HabitGroupEntry from "../HabitGroupEntry/HabitGroupEntry";
import Button from "../Button/Button";
import "./HabitGroup.scss";

const HabitGroup = ({ name }) => {
  const [habitEntries, setHabitEntries] = useState([]);
  const [habitGroupName, setHabitGroupName] = useState(false);
  const groupNameOnBlur = () =>{
    setHabitGroupName(false);
  }
  const groupNameOnClick = () =>{
    setHabitGroupName(true);
  }
  const createNewHabit = () => {
    setHabitEntries([...habitEntries, "New habit"]);
  };
  return (
    <div>
      <div className="habitGroup-title">
        <h3 
        onBlur={groupNameOnBlur}
        onClick={groupNameOnClick}
        contentEditable={habitGroupName}
        className="h1-habit">{name}</h3>
        <Button icon={"add"} onButtonClick={createNewHabit}>
          new habit
        </Button>
      </div>
      <div className="habitGroup-list">
        {habitEntries.map((item, i) => (
          <HabitGroupEntry key={i} name={item} />
        ))}
      </div>
    </div>
  );
};
export default HabitGroup;
