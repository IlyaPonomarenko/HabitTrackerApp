import React from "react";
import "./Mood.scss";

const Mood = ({ moodLevel }) => {
  return (
    <div className="moodContainer">
      <div>
        <h4>How is your mood?</h4>
      </div>
      <div className="moodContainer__value">
        <span>{moodLevel}</span>
      </div>
      <input
        className="moodContainer__moodBar"
        type="range"
        min="0"
        max="100"
        value={moodLevel}
      />
    </div>
  );
};
export default Mood;
