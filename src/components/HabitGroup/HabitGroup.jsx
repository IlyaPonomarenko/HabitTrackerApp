import React, { useState } from "react";
import HabitGroupEntry from "../HabitGroupEntry/HabitGroupEntry";
import Button from "../Button/Button";
import "./HabitGroup.scss";

const HabitGroup = ({ name }) => {
  const [habitEntries, setHabitEntries] = useState([]);
  const createNewHabit = () => {
    setHabitEntries([...habitEntries, "New habit"]);
  };
  return (
    <div>
      <div className="habitGroup-title">
        <h3 className="h1-habit">{name}</h3>
        <Button icon={"add"} onButtonClick={createNewHabit}>
          new habit
        </Button>
      </div>
      <div className="habitGroup-list">
        {habitEntries.map((item,i) => (
          <HabitGroupEntry key={i} entryName={item} />
        ))}
      </div>
    </div>
  );
};
export default HabitGroup;
