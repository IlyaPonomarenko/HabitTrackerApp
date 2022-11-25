import "./Journal.scss";
import React from "react";
import JournalSidebar from "../../components/JournalSidebar/JournalSidebar";
import JournalForm from "../../components/JournalForm/JournalForm";
// export const ADD_ITEM = "ADD_ITEM";
// export const DELETE_ITEM = "DELETE_ITEM";

// const initialState = {
//   diaryItems: [],
// };

// export const addItem = (item) => ({
//   type: ADD_ITEM,
//   payload: item
// })

// export const deleteItem = (id) => ({
//   type: DELETE_ITEM,
//   payload: id
// })

// const diaryReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_ITEM:
//       let id = 1;
//       if (state.diaryItems.length > 0) {
//         id = state.diaryItems[0].id + 1;
//       }
//       let item = {
//         id: id,
//         title: action.payload.title,
//         date: action.payload.date,
//         text: action.payload.text,
//       };
//       let newDiaryItems = [item, ...state.diaryItems];
//       newDiaryItems = newDiaryItems.sort((a, b) => {
//         return new Date(b.date) - new Date(a.date);
//       });
//       return {
//         ...state,
//         diaryItems: newDiaryItems,
//       };
//     case DELETE_ITEM:
//       return {
//         ...state,
//         diaryItems: state.diaryItems.filter(
//           (item) => item.id !== action.payload
//         ),
//       };
//     default:
//       return state;
//   }
// };

const Journal = () => {
  return (
    <div className="journals">
      <JournalSidebar />

      <div className="journal-form">
        {" "}
        <JournalForm />
      </div>
    </div>
  );
};

export default Journal;
