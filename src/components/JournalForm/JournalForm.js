import React from "react";
import Mood from "../JournalFormComponents/Mood";
import Busy from "../JournalFormComponents/Busy";
import Feel from "../JournalFormComponents/Feel";
import JournalTextArea from "../JournalFormComponents/JournalTextArea";

import "./JournalForm.scss";

const JournalForm = ({ activeEntry, onUpdateEntry, onChange, checkboxes }) => {
  if (!activeEntry)
    return <div className="no-active-entry">No Entry Selected</div>;

  return (
    <div className="journal-form">
      <div className="form-container">
        <JournalTextArea
          onUpdateEntry={onUpdateEntry}
          activeEntry={activeEntry}
        />
        <div className="mood-busy-container">
          <div className="mood-container">
            <Mood
              moodLevel={activeEntry.moodLevel}
              activeEntry={activeEntry}
              onUpdateEntry={onUpdateEntry}
            />
          </div>
          <div className="busy-container">
            <Busy
              busyLevel={activeEntry.busyLevel}
              activeEntry={activeEntry}
              onUpdateEntry={onUpdateEntry}
            />
          </div>
        </div>
        <div className="feel-container">
          <Feel
            activeEntry={activeEntry}
            onUpdateEntry={onUpdateEntry}
            onChange={onChange}
            checkboxes={checkboxes}
          />
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
