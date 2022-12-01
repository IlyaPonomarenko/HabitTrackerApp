import React from "react";
import "./Busy.scss";

const Busy = ({ activeEntry, onUpdateEntry }) => {
  const onEditField = (busyLevel, value) => {
    onUpdateEntry({
      ...activeEntry,
      busyLevel: value,
      lastModified: Date.now(),
    });
  };
  return (
    <div className="busyContainer">
      <div>
        <h4>How overwhelmed/busy are you?</h4>
      </div>
      <div className="busyContainer__value">
        <span>{activeEntry.busyLevel}</span>
      </div>
      <input
        className="busyContainer__busyBar"
        type="range"
        min="0"
        max="100"
        onChange={(event) =>
          onEditField(activeEntry.busyLevel, event.target.value)
        }
      />
    </div>
  );
};

export default Busy;
