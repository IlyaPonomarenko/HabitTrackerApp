import React from "react";
import "./Feel.scss";

const Feel = ({ activeEntry, onUpdateEntry }) => {
  const onEditField = (key, value) => {
    onUpdateEntry({
      ...activeEntry,
      feelings: [{ [key]: value }],
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
            <input
              key="excited"
              type="checkbox"
              className="positive excited"
              name="excited"
              value="excited"
              onChange={(e) => onEditField("excited", e.target.checked)}
            />{" "}
            <label htmlFor="excited"> excited</label>
          </div>
          <div className="positive joyful">
            <input
              type="checkbox"
              name="joyful"
              onChange={(e) => onEditField("joyful", e.target.checked)}
            />
            <label htmlFor="joyful"> joyful</label>
          </div>
          <div className="positive amazed">
            <input
              type="checkbox"
              name="amazed"
              onChange={(e) => onEditField("amazed", e.target.checked)}
            />
            <label htmlFor="amazed"> amazed</label>
          </div>
          <div className="positive grateful">
            <input
              type="checkbox"
              name="grateful"
              onChange={(e) => onEditField("grateful", e.target.checked)}
            />
            <label htmlFor="grateful"> grateful</label>
          </div>
          <div className="positive accomplished">
            <input
              type="checkbox"
              name="accomplished"
              onChange={(e) => onEditField("accomplished", e.target.checked)}
            />
            <label htmlFor="accomplished"> accomplished</label>
          </div>
          <div className="positive thankful">
            <input
              type="checkbox"
              name="thankful"
              onChange={(e) => onEditField("thankful", e.target.checked)}
            />
            <label htmlFor="thankful"> thankful</label>
          </div>
          <div className="positive proud">
            <input
              type="checkbox"
              name="proud"
              onChange={(e) => onEditField("proud", e.target.checked)}
            />
            <label htmlFor="proud"> proud</label>
          </div>
        </div>
        <div className="feel-container__neutral">
          <div className="neutral productive">
            <input
              type="checkbox"
              value="productive"
              onChange={(e) => onEditField("productive", e.target.checked)}
            />
            <label htmlFor="productive"> productive</label>
          </div>
          <div className="neutral active">
            <input
              type="checkbox"
              value="active"
              onChange={(e) => onEditField("active", e.target.checked)}
            />
            <label htmlFor="active"> active</label>
          </div>
          <div className="neutral relaxed">
            <input
              type="checkbox"
              value="relaxed"
              onChange={(e) => onEditField("relaxed", e.target.checked)}
            />
            <label htmlFor="relaxed"> relaxed</label>
          </div>
          <div className="neutral calm">
            <input
              type="checkbox"
              value="calm"
              onChange={(e) => onEditField("calm", e.target.checked)}
            />
            <label htmlFor="calm"> calm</label>
          </div>
          <div className="neutral optimistic">
            <input
              type="checkbox"
              value="optimistic"
              onChange={(e) => onEditField("optimistic", e.target.checked)}
            />
            <label htmlFor="optimistic"> optimistic</label>
          </div>
          <div className="neutral chilled">
            <input
              type="checkbox"
              value="chilled"
              onChange={(e) => onEditField("chilled", e.target.checked)}
            />
            <label htmlFor="chilled"> chilled</label>
          </div>
          <div className="neutral supported">
            <input
              type="checkbox"
              value="supported"
              onChange={(e) => onEditField("supported", e.target.checked)}
            />
            <label htmlFor="supported"> supported</label>
          </div>
        </div>
        <div className="feel-container__negative">
          <div className="negative sad">
            <input
              type="checkbox"
              value="sad"
              onChange={(e) => onEditField("sad", e.target.checked)}
            />
            <label htmlFor="sad"> sad</label>
          </div>
          <div className="negative nervous">
            <input
              type="checkbox"
              value="nervous"
              onChange={(e) => onEditField("nervous", e.target.checked)}
            />
            <label htmlFor="nervous"> nervous</label>
          </div>
          <div className="negative impatient">
            <input
              type="checkbox"
              value="impatient"
              onChange={(e) => onEditField("impatient", e.target.checked)}
            />
            <label htmlFor="impatient"> impatient</label>
          </div>
          <div className="negative bored">
            <input
              type="checkbox"
              value="bored"
              onChange={(e) => onEditField("bored", e.target.checked)}
            />
            <label htmlFor="bored"> bored</label>
          </div>
          <div className="negative worried">
            <input
              type="checkbox"
              value="worried"
              onChange={(e) => onEditField("worried", e.target.checked)}
            />
            <label htmlFor="worried"> worried</label>
          </div>
          <div className="negative meh">
            <input
              type="checkbox"
              value="meh"
              onChange={(e) => onEditField("meh", e.target.checked)}
            />
            <label htmlFor="meh"> meh</label>
          </div>
          <div className="negative overwhelmed">
            <input
              type="checkbox"
              value="overwhelmed"
              onChange={(e) => onEditField("overwhelmed", e.target.checked)}
            />
            <label htmlFor="overwhelmed"> overwhelmed</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feel;
