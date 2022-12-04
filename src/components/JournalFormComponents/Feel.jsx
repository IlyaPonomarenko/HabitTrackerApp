import React from "react";
import "./Feel.scss";

const Feel = ({ checkHandler, onUpdateEntry, activeEntry, entries }) => {
  const onEditField = (key, value) => {
    onUpdateEntry({
      ...activeEntry,
      [key]: value,
      lastModified: Date.now(),
    });
  };
  return (
    <div>
      <div className="feel-header">
        <h4>How do you feel?</h4>
      </div>
      <div className="feel-container">
        <div className="feel-container__positive">
          <div className="positive excited">
            <label
              htmlFor="excited"
              className="positive excited"
              value={activeEntry.feeling.excited}
              onChange={(e) => onEditField("excited", e.target.value)}
              autoFocus
            >
              <input type="checkbox" name="excited" />
              excited
            </label>
          </div>
          <div className="positive joyful">
            <label>
              <input type="checkbox" value="1" />
              joyful
            </label>
          </div>
          <div className="positive amazed">
            <label>
              <input type="checkbox" value="1" />
              amazed
            </label>
          </div>
          <div className="positive grateful">
            <label>
              <input type="checkbox" value="1" />
              grateful
            </label>
          </div>
          <div className="positive accomplished">
            <label>
              <input type="checkbox" value="1" />
              accomplished
            </label>
          </div>
          <div className="positive thankful">
            <label>
              <input type="checkbox" value="1" />
              thankful
            </label>
          </div>
          <div className="positive proud">
            <label>
              <input type="checkbox" value="1" />
              proud
            </label>
          </div>
        </div>
        <div className="feel-container__neutral">
          <div className="neutral productive">
            <label>
              <input type="checkbox" value="1" />
              productive
            </label>
          </div>
          <div className="neutral active">
            <label>
              <input type="checkbox" value="1" />
              active
            </label>
          </div>
          <div className="neutral relaxed">
            <label>
              <input type="checkbox" value="1" />
              relaxed
            </label>
          </div>
          <div className="neutral calm">
            <label>
              <input type="checkbox" value="1" />
              calm
            </label>
          </div>
          <div className="neutral optimistic">
            <label>
              <input type="checkbox" value="1" />
              optimistic
            </label>
          </div>
          <div className="neutral chilled">
            <label>
              <input type="checkbox" value="1" />
              chilled
            </label>
          </div>
          <div className="neutral supported">
            <label>
              <input type="checkbox" value="1" />
              supported
            </label>
          </div>
        </div>
        <div className="feel-container__negative">
          <div className="negative sad">
            <label>
              <input type="checkbox" value="1" />
              sad
            </label>
          </div>
          <div className="negative nervous">
            <label>
              <input type="checkbox" value="1" />
              nervous
            </label>
          </div>
          <div className="negative impatient">
            <label>
              <input type="checkbox" value="1" />
              impatient
            </label>
          </div>
          <div className="negative bored">
            <label>
              <input type="checkbox" value="1" />
              bored
            </label>
          </div>
          <div className="negative worried">
            <label>
              <input type="checkbox" value="1" />
              worried
            </label>
          </div>
          <div className="negative meh">
            <label>
              <input type="checkbox" value="1" />
              meh
            </label>
          </div>
          <div className="negative overwhelmed">
            <label>
              <input type="checkbox" value="1" />
              overwhelmed
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feel;
