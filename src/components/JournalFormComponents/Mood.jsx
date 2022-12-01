import React from "react";
import "./Mood.scss";

const Mood = ({ activeEntry, onUpdateEntry }) => {
  const onEditField = (moodLevel, value) => {
    onUpdateEntry({
      ...activeEntry,
      moodLevel: value,
      lastModified: Date.now(),
    });
  };
  return (
    <div className="moodContainer">
      <div>
        <h4>How is your mood?</h4>
      </div>
      <div className="moodContainer__value">
        <span>{activeEntry.moodLevel}</span>
      </div>
      <input
        className="moodContainer__moodBar"
        type="range"
        min="0"
        max="100"
        onChange={(event) =>
          onEditField(activeEntry.moodLevel, event.target.value)
        }
      />
    </div>
  );
};
export default Mood;
