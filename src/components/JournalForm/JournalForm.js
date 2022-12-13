import React from "react";
import Mood from "../JournalFormComponents/Mood";
import Busy from "../JournalFormComponents/Busy";
import Feel from "../JournalFormComponents/Feel";
import JournalTextArea from "../JournalFormComponents/JournalTextArea";
import NoEntryScreen from "../JournalFormComponents/NoEntryScreen";
import "./JournalForm.scss";

const JournalForm = ({ activeEntry, onUpdateEntry }) => {
  if (!activeEntry)
    return (
      <div className="no-active-entry">
        <NoEntryScreen />
      </div>
    );

  return (
    <div className="journal-form">
      <div className="form-container">
        <JournalTextArea
          onUpdateEntry={onUpdateEntry}
          activeEntry={activeEntry}
        />
        <div className="mood-busy-container">
          <div className="mood-container">
            <Mood activeEntry={activeEntry} onUpdateEntry={onUpdateEntry} />
          </div>
          <div className="busy-container">
            <Busy activeEntry={activeEntry} onUpdateEntry={onUpdateEntry} />
          </div>
        </div>
        <div className="feel-container">
          <Feel activeEntry={activeEntry} onUpdateEntry={onUpdateEntry} />
        </div>
      </div>
    </div>
  );
};

export default JournalForm;
