import React from "react";
import Button from "../Button/Button";
import JournalSidebarTab from "../JournalSidebarTab/JournalSidebarTab";
import "./JournalSidebar.scss";

const JournalSidebar = (props, { onButtonClick, onTabClick }) => {
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
          onTabClick={onTabClick}
          icon={"note"}
        >
          {props.title}
        </JournalSidebarTab>

        {/* Placeholder End */}
      </div>
    </div>
  );
};

export default JournalSidebar;
