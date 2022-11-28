import React from "react";
import "./JournalTextArea.scss";

const JournalTextArea = (props) => {
  return (
    <form>
      <div className="textArea-container">
        <div className="text-area-date">Date</div>
        <label>
          <textarea
            placeholder={props.text}
            className="text-area"
            value={props.value}
            onChange={props.handleChange}
          />
        </label>
      </div>
    </form>
  );
};
export default JournalTextArea;
