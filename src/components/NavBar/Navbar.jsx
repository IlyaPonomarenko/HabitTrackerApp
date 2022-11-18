import React from "react";
import NavButtons from "../NavButtons/NavButtons";
import "./Navbar.scss";

const Navbar = ({ onButtonClick }) => {
  return (
    <div className="navbar">
      <div className="navbar__icon">O</div>
      <nav className="navbar__button-wrapper">
        <NavButtons onButtonClick={onButtonClick}>Habits</NavButtons>
        <NavButtons onButtonClick={onButtonClick}>Tasks</NavButtons>
        <NavButtons onButtonClick={onButtonClick}>Journal</NavButtons>
        <NavButtons onButtonClick={onButtonClick}>Compete</NavButtons>
      </nav>
    </div>
  );
};

export default Navbar;
