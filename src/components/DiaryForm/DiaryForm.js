import "./DiaryForm.scss";
import React, { useState } from "react";

export default function DiaryForm({ addItem }) {
  const [title, setTitle] = useState(""); //Then the state is updated in Redux
  const [date, setDate] = useState("");
  const [text, setText] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    let itemObject = {
      title: title,
      date: date,
      text: text,
    };
    addItem(itemObject);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="diary-form">
          <input
            onChange={(event) => setTitle(event.target.value)} //once we change value here, it updates the state.
            placeholder="Add an item"
            className="diary-input"
          ></input>
          <input
            onChange={(event) => setDate(event.target.value)}
            type="date"
            className="diary-date-input"
          ></input>
        </div>
        <textarea
          onChange={(event) => setText(event.target.value)}
          rows="2"
          className="diary-textarea"
        />
        <button type="submit" className="diary-button">
          Add Item to Journal
        </button>
      </form>
    </div>
  );
}
