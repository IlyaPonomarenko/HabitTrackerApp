import React, { Component } from "react";
import "./Journal.scss";
import JournalSidebar from "../../components/JournalSidebar/JournalSidebar";
import JournalForm from "../../components/JournalForm/JournalForm";

class Journal extends Component {
  render() {
    return (
      <div className="journals">
        <JournalSidebar />

        <div className="journal">
          {" "}
          <JournalForm />
        </div>
      </div>
    );
  }
}

export default Journal;
