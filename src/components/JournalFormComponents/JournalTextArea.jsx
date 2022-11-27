import React, { Component } from "react";
import "./JournalTextArea.scss";

class JournalTextArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <form>
        <div className="textArea-container">
          <div className="text-area-date">Date</div>
          <label>
            <textarea
              placeholder="-"
              className="text-area"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
        </div>
      </form>
    );
  }
}
export default JournalTextArea;
