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
      feelings: [
        // { name: "excited", checked: false },
        // { name: "joyful", checked: false },
        // { name: "amazed", checked: false },
        // { name: "grateful", checked: false },
        // { name: "accomplished", checked: false },
        // { name: "thankful", checked: false },
        // { name: "proud", checked: false },
        // { name: "productive", checked: false },
        // { name: "active", checked: false },
        // { name: "relaxed", checked: false },
        // { name: "calm", checked: false },
        // { name: "optimistic", checked: false },
        // { name: "chilled", checked: false },
        // { name: "supported", checked: false },
        // { name: "sad", checked: false },
        // { name: "nervous", checked: false },
        // { name: "impatent", checked: false },
        // { name: "bored", checked: false },
        // { name: "worried", checked: false },
        // { name: "meh", checked: false },
        // { name: "overwhelmed", checked: false },
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
    console.log(updatedEntry);

    setEntries(updatedEntriesArray);
  };

  // const handleChange = (e) => {
  //   const value = e.target.value;
  //   const tempFeelings = entries.feelings.map((entry, feeling) => {
  //     if (entry.id === activeEntry && feeling.value === value) {
  //       return { ...feeling, checked: true };
  //     }
  //     return feeling;
  //   });

  //   setEntries({ ...entries, feelings: tempFeelings });
  // };

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
          // handleChange={handleChange}
        />
      </div>
    </div>
  );
}

export default Journal;
