import React from "react";
import Button from "../Button/Button";
import "./JournalSidebar.scss";

const JournalSidebar = ({
  entries,
  onAddEntry,
  onDeleteEntry,
  activeEntry,
  setActiveEntry,
  icon,
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
            key={Math.random() * 100}
            className={`journal-sidebar__entry-wrapper ${
              entry.id === activeEntry && "active"
            }`}
            onClick={() => setActiveEntry(entry.id)}
          >
            <div className="journal-sidebar__entry-title">
              <strong>{entry.title}</strong>
              <Button
                variant="delete"
                onButtonClick={() => onDeleteEntry(entry.id)}
              >
                <span className="material-icons">{(icon = "delete")}</span>
              </Button>
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
