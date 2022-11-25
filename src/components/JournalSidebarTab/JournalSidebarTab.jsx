import React from "react";
import "./JournalSidebarTab.scss";

/* 
TODO: add google icon
*/

/* Innitialized defaults for each value, will be overwritten if value is passed in */
const JournalSidebarTab = ({
  onTabClick,
  children = "Journal Sidebar Tab",
  type = "button",
  diaryCounter = "123",
  icon = "circle",
}) => {
  return (
    <button className="journal-sidebar-tab" onClick={onTabClick} type={type}>
      <div className="journal-sidebar-tab__wrapper">
        {/* TODO: add google icon */}
        <span className="material-icons">{icon}</span>
        {/* Displays button text */}
        <div className="journal-sidebar-tab__children">{children}</div>
      </div>
      {diaryCounter} {/* Displays number of tasks */}
    </button>
  );
};

export default JournalSidebarTab;
