import React from "react";
import "./NavButtons.scss";
import { NavLink } from "react-router-dom";

/* 
TODO: integrate NavLinks 
*/

const NavButtons = ({
  onButtonClick,
  children = "Nav Button",
  linkTo,
  icon,
}) => {
  return (
    <NavLink to={linkTo} className="navButton" onClick={onButtonClick}>
      <span className="material-icons">{icon}</span>
      {children}
    </NavLink>
  );
};

export default NavButtons;
