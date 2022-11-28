import React from "react";
import Mood from "../JournalFormComponents/Mood";
import Busy from "../JournalFormComponents/Busy";
import Feel from "../JournalFormComponents/Feel";

import "./JournalForm.scss";

const JournalForm = ({ activeEntry, onUpdateEntry }) => {
  const onEditField = (key, value) => {
    onUpdateEntry({
      ...activeEntry,
      [key]: value,
      lastModified: Date.now(),
    });
  };

  if (!activeEntry)
    return <div className="no-active-entry">No Entry Selected</div>;

  return (
    <div className="journal-form">
      <div className="form-container">
        <div>
          <input
            className="entry-title"
            value={activeEntry.title}
            onChange={(e) => onEditField("title", e.target.value)}
            autoFocus
          ></input>
        </div>
        <div className="journal-form__tab-wrapper">
          <form>
            <div className="textArea-container">
              <div className="text-area-date">Date</div>
              <label>
                <textarea
                  placeholder="Write your  note here..."
                  className="text-area"
                  value={activeEntry.body}
                  onChange={(e) => onEditField("body", e.target.value)}
                />
              </label>
            </div>
          </form>
        </div>
        <div className="mood-busy-container">
          <div className="mood-container">
            <Mood />
          </div>
          <div className="busy-container">
            <Busy />
          </div>
        </div>
        <div className="feel-container">
          <Feel />
        </div>
      </div>
      {/* <div className="preview-container">
        <div className="journal-form_preview">
          <h3 className="preview-title">{activeEntry.title}</h3>
          <div className="markdown-preview">{activeEntry.body}</div>
        </div>
      </div> */}
    </div>
  );
};

export default JournalForm;
