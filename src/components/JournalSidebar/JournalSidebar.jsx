import React from "react";
import Button from "../Button/Button";
import JournalSidebarTab from "../JournalSidebarTab/JournalSidebarTab";
import "./JournalSidebar.scss";

const JournalSidebar = ({ onButtonClick, onTabClick, diaryCounter }) => {
  return (
    <div className="journal-sidebar">
      <div className="journal-sidebar__button-wrapper">
        <Button onButtonClick={onButtonClick} icon={"add"}>
          Add New
        </Button>
      </div>
      <div className="journal-sidebar__tab-wrapper">
        {/* Placeholder Start */}
        <JournalSidebarTab
          type={"button"}
          diaryCount={diaryCounter}
          onTabClick={onTabClick}
          icon={"school"}
        >
          Journal item 1
        </JournalSidebarTab>
        <JournalSidebarTab
          type={"button"}
          diaryCount={diaryCounter}
          onTabClick={onTabClick}
          icon={"work"}
        >
          Go for a walk
        </JournalSidebarTab>

        {/* Placeholder End */}
      </div>
    </div>
  );
};

export default JournalSidebar;
