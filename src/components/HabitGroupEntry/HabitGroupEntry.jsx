import React, { useState } from "react";
import "./HabitGroupEntry.scss";
import Checkbox from "../Checkbox/Checkbox";

const HabitGroupEntry = ({ name }) => {
  const [habitName, setHabitName] = useState(false);
  const habitNameOnBlur = () => {
    setHabitName(false);
  };
  const habitNameOnClick = () => {
    setHabitName(true);
  };
  return (
    <div className="habitGroupEntry-container">
      <div className="habitGroupEntry-container__entry">
        <h4
          onBlur={habitNameOnBlur}
          onClick={habitNameOnClick}
          contentEditable={habitName}
          className="h1-habit"
        >
          {name}
        </h4>
      </div>
      <div className="checkboxes">
        {Array(7)
          .fill(true)
          .map((_, i) => (
            <Checkbox key={i} />
          ))}
      </div>
    </div>
  );
};
export default HabitGroupEntry;
