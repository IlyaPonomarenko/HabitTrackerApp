import "./Toggle.scss";
import React, { useState } from "react";

/* If we want to save whether the user has toggled the completed tasks */
const Toggle = ({ showChildren, toggleHandler }) => {
  /* TODO: State will have to be passed to parent */
  return (
    <>
      {showChildren ? (
        <div className="toggle--selected" onClick={toggleHandler}>
          <div className="toggle--selected__knob"></div>
        </div>
      ) : (
        <div className="toggle" onClick={toggleHandler}>
          <div className="toggle__knob"></div>
        </div>
      )}
    </>
  );
};

export default Toggle;
