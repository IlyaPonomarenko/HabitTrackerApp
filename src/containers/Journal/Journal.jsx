import React from "react";
import { useState } from "react";
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
      title: "Untitled Entry",
      body: "",
      lastModified: Date.now(),
      moodLevel: 10,
      busyLevel: 90,
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

// class Journal extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: "",
//       title: "Untitled Entry",
//       text: "Content",
//       moodLevel: 90,
//       busyLevel: 40,
//       date: "1",
//       feel: [{ feelingGroup: 0, name: "", value: false }],
//     };
//   }

//   render() {

//   }
// }

export default Journal;
