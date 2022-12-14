import React from "react";
import NavButtons from "../NavButtons/NavButtons";
import "./Navbar.scss";

/* 
TODO: Create navButtons with a map that iterates through an array of web addresses
*/

const Navbar = ({ onButtonClick }) => {
  return (
    <div className="navbar">
      <div className="navbar__icon">
        <span className="material-icons">settings</span>
      </div>
      <nav className="navbar__button-wrapper">
        <NavButtons
          icon={"calendar_month"}
          linkTo={"journal"}
          onButtonClick={onButtonClick}
        >
          Journal
        </NavButtons>
        <NavButtons
          icon={"check_box"}
          linkTo={"tasks"}
          onButtonClick={onButtonClick}
        >
          Tasks
        </NavButtons>
        <NavButtons icon={"edit"} linkTo={"/"} onButtonClick={onButtonClick}>
          Habits
        </NavButtons>
      </nav>
    </div>
  );
};

export default Navbar;
