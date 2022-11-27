import React from "react";
import "./JournalTextArea.scss";

export default function JournalTextArea(props) {
  return (
    <form>
      <div className="textArea-container">
        <div className="text-area-date">{props.date}</div>
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
}
