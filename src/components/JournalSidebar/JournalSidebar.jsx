import React from "react";
import Button from "../Button/Button";
import DeleteButton from "../Button/DeleteButton";
import "./JournalSidebar.scss";

const JournalSidebar = ({
  entries,
  onAddEntry,
  onDeleteEntry,
  activeEntry,
  setActiveEntry,
}) => {
  return (
    <div className="journal-sidebar">
      <div className="journal-sidebar__header">
        <h1>Journal Entries</h1>
        <Button onButtonClick={onAddEntry} icon={"add"}>
          Add New
        </Button>
      </div>
      <div className="journal-sidebar__entries-wrapper">
        {entries.map((entry) => (
          <div
            className={`journal-sidebar__entry-wrapper ${
              entry.id === activeEntry && "active"
            }`}
            onClick={() => setActiveEntry(entry.id)}
          >
            <div className="journal-sidebar__entry-title">
              <strong>{entry.title}</strong>
              <DeleteButton
                className="delete"
                onButtonClick={() => onDeleteEntry(entry.id)}
              ></DeleteButton>
            </div>
            <p>{entry.body && entry.body.substr(0, 30) + "..."}</p>
            <small className="entry-meta">
              Last modified{" "}
              {new Date(entry.lastModified).toLocaleDateString("en-GB", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JournalSidebar;
