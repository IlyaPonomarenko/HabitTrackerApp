import React, { useState } from "react";
import {v4 as uuid} from "uuid"
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
      feelings: [
        // { name: "excited", value: false },
        // { name: "joyful", value: false },
        // { name: "amazed", value: false },
        // { name: "grateful", value: false },
        // { name: "accomplished", value: false },
        // { name: "thankful", value: false },
        // { name: "proud", value: false },
        // { name: "productive", value: false },
        // { name: "active", value: false },
        // { name: "relaxed", value: false },
        // { name: "calm", value: false },
        // { name: "optimistic", value: false },
        // { name: "chilled", value: false },
        // { name: "supported", value: false },
        // { name: "sad", value: false },
        // { name: "nervous", value: false },
        // { name: "impatent", value: false },
        // { name: "bored", value: false },
        // { name: "worried", value: false },
        // { name: "meh", value: false },
        // { name: "overwhelmed", value: false },
      ],
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
    console.log(updatedEntriesArray);

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
