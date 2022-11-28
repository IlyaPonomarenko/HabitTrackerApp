import React, { Component } from "react";
import "./Journal.scss";
import JournalSidebar from "../../components/JournalSidebar/JournalSidebar";
import JournalForm from "../../components/JournalForm/JournalForm";

class Journal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      title: "Untitled Entry",
      text: "Content",
      moodLevel: 90,
      busyLevel: 40,
      date: "1",
      feel: [{ feelingGroup: 0, name: "", value: false }],
    };
  }

  render() {
    return (
      <div className="journal">
        <JournalSidebar />

        <div className="journal-main">
          {" "}
          <JournalForm
            title={this.state.title}
            date={this.state.date}
            mood={this.state.moodLevel}
            value={this.state.value}
            text={this.state.text}
            busy={this.state.busyLevel}
          />
        </div>
      </div>
    );
  }
}

export default Journal;
