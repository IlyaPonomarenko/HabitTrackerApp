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
      moodLevel: 10,
      busyLevel: 90,
      feeling: {
        excited: false,
        joyful: false,
        amazed: false,
        grateful: false,
        accomplished: false,
        thankful: false,
        proud: false,
        productive: false,
        active: false,
        relaxed: false,
        calm: false,
        optimistic: false,
        chilled: false,
        supported: false,
        sad: false,
        nervous: false,
        impatent: false,
        bored: false,
        worried: false,
        meh: false,
      },
    };

    setEntries([newEntry, ...entries]);
  };

  const checkHandler = () => {
    // if (e.target.checked) {
    console.log("ckecked");
    //   setEntries({ ...entries.feeling, [e.target.name]: true });
    // }
  };

  const onUpdateEntry = (updatedEntry) => {
    const updatedEntriesArray = entries.map((entry) => {
      if (entry.id === activeEntry) {
        return updatedEntry;
      }
      return entry;
    });
    console.log("ckecked");

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
          entries={entries}
          checkHandler={checkHandler}
          activeEntry={getActiveEntry()}
          setActiveEntry={setActiveEntry}
          onUpdateEntry={onUpdateEntry}
        />
      </div>
    </div>
  );
}

export default Journal;
