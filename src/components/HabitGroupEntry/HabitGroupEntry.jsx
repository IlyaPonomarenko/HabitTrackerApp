import React from "react";
import "./HabitGroupEntry.scss";
const HabitGroupEntry = () => {
  return (
    <div className="habitGroupEntry-container">
      <div className="habitGroupEntry-container__entry">
        <h4 className="h1-habit">A habit</h4>
      </div>
      <div className="checkboxes">
              <input className="checkbox" type="checkbox" />
              <input className="checkbox" type="checkbox" />
              <input className="checkbox" type="checkbox" />
              <input className="checkbox" type="checkbox" />
              <input className="checkbox" type="checkbox" />
              <input className="checkbox" type="checkbox" />
              <input className="checkbox" type="checkbox" />
            </div>
    </div>
  );
};
export default HabitGroupEntry;
