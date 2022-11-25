import React from "react";
import { TiDeleteOutline } from "react-icons/ti";

export default function DiaryItem({ item, showModal }) {
  return (
    <div className="diary-row">
      <span onClick={() => showModal(item)}>{item.title}</span>
      <div>
        <span className="">{item.date}</span>
        <TiDeleteOutline className="delete" />
      </div>
    </div>
  );
}
