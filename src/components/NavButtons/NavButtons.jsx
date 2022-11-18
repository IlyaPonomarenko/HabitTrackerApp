import React from "react";
import "./NavButtons.scss";

/* 
TODO: integrate NavLinks 
*/

const NavButtons = ({ onButtonClick, children = "Nav Button" }) => {
  return (
    <div className="navButton" onClick={onButtonClick}>
      <div className="navButton__icon">O</div>
      {children}
    </div>
  );
};

export default NavButtons;
