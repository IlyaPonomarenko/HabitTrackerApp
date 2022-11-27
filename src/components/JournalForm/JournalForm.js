import React from "react";
import Mood from "../JournalFormComponents/Mood";
import Busy from "../JournalFormComponents/Busy";
import Feel from "../JournalFormComponents/Feel";
import JournalTextArea from "../JournalFormComponents/JournalTextArea";
import "./JournalForm.scss";

const JournalForm = () => {
  return (
    <div className="journal-form">
      <div className="form-container">
        <div>
          <div className="entry-name">Journal item 1</div>
        </div>
        <div className="journal-form__tab-wrapper">
          <JournalTextArea />
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
    </div>
  );
};

export default JournalForm;
