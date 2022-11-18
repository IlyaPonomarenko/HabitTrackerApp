import React from "react";
import "./NavButtons.scss";
import { NavLink } from "react-router-dom";

/* 
TODO: integrate NavLinks 
*/

const NavButtons = ({ onButtonClick, children = "Nav Button", linkTo }) => {
  return (
    <NavLink to={linkTo} className="navButton" onClick={onButtonClick}>
      <div className="navButton__icon">O</div>
      {children}
    </NavLink>
  );
};

export default NavButtons;
