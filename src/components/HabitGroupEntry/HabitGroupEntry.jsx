import React from "react";
import "./HabitGroupEntry.scss";
import Checkbox from "../Checkbox/Checkbox";

const HabitGroupEntry = ({ entryName }) => {
  return (
    <div className="habitGroupEntry-container">
      <div className="habitGroupEntry-container__entry">
        <h4 className="h1-habit">{entryName}</h4>
      </div>
      <div className="checkboxes">
      {Array(7).fill(true).map((_, i) => <Checkbox key={i} />)}
      </div>
    </div>
  );
};
export default HabitGroupEntry;
