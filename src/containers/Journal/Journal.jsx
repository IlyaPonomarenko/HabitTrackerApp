import React, { useState } from "react";
import uuid from "react-uuid";
import JournalSidebar from "../../components/JournalSidebar/JournalSidebar";
import JournalForm from "../../components/JournalForm/JournalForm";
import "./Journal.scss";

function Journal() {
  const [entries, setEntries] = useState([]);
  const [activeEntry, setActiveEntry] = useState(false);

  const onAddEntry = () => {
    const newEntry = {
      id: uuid(),
      title: "Journal Entry",
      body: "Please type here...",
      lastModified: Date.now(),
      moodLevel: 50,
      busyLevel: 50,
      feelings: [],
    };
    setEntries([newEntry, ...entries]);
  };

  const onUpdateEntry = (updatedEntry) => {
    const updatedEntriesArray = entries.map((entry) => {
      if (entry.id === activeEntry) {
        return updatedEntry;
      }
      return entry;
    });
    console.log(updatedEntry);

    setEntries(updatedEntriesArray);
  };

  const onDeleteEntry = (idToDelete) => {
    setEntries(entries.filter((entry) => entry.id !== idToDelete));
  };

  const getActiveEntry = () => {
    return entries.find((entry) => entry.id === activeEntry);
  };

  return (
    <div className="journal">
      <JournalSidebar
        entries={entries}
        onAddEntry={onAddEntry}
        onDeleteEntry={onDeleteEntry}
        activeEntry={activeEntry}
        setActiveEntry={setActiveEntry}
      />

      <div className="journal-main">
        {" "}
        <JournalForm
          activeEntry={getActiveEntry()}
          onUpdateEntry={onUpdateEntry}
        />
      </div>
    </div>
  );
}

export default Journal;
