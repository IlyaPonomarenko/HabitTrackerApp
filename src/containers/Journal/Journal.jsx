import React, { Component } from "react";
import "./Journal.scss";
import JournalSidebar from "../../components/JournalSidebar/JournalSidebar";
import JournalForm from "../../components/JournalForm/JournalForm";

class Journal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      title: "New Journal Entry",
      text: "Content",
      mood: 30,
      busy: 40,
      inputDate: "1",
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
            date={this.state.inputDate}
            mood={this.state.mood}
            value={this.state.value}
            text={this.state.text}
            busy={this.state.busy}
          />
        </div>
      </div>
    );
  }
}

export default Journal;
