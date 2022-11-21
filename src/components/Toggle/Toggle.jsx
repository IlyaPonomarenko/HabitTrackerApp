import "./Toggle.scss";
import React, { useState } from "react";

/* If we want to save weather the user has toggled the completed tasks */
const Toggle = ({ toggled }) => {
  /* TODO: State will have to be bassed to parent */
  const defaultToggled = toggled ? toggled : false;
  const [isToggled, setIsToggled] = useState(defaultToggled);

  return (
    <>
      {isToggled ? (
        <div
          className="toggle--selected"
          onClick={() => setIsToggled((prev) => !prev)}
        >
          <div className="toggle--selected__knob"></div>
        </div>
      ) : (
        <div className="toggle" onClick={() => setIsToggled((prev) => !prev)}>
          <div className="toggle__knob"></div>
        </div>
      )}
    </>
  );
};

export default Toggle;
