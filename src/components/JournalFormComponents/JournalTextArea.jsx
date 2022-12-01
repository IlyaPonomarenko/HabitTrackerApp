import React from "react";
import "./JournalTextArea.scss";

const JournalTextArea = ({ activeEntry, onUpdateEntry }) => {
  const onEditField = (key, value) => {
    onUpdateEntry({
      ...activeEntry,
      [key]: value,
      lastModified: Date.now(),
    });
  };
  return (
    <div>
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
            <div className="text-area-date">
              {" "}
              {new Date(Date.now()).toLocaleDateString("en-GB", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </div>
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
    </div>
  );
};
export default JournalTextArea;
