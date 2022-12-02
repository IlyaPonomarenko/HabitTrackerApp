import "./Checkbox.scss";
import React, { useState } from "react";

const Checkbox = ({ label, checked, ...props }) => {
  /* TODO: State will have to be passed to parent if 'checked' status is to be tracked*/
  const defaultChecked = checked ? checked : false;
  const [isChecked, setIsChecked] = useState(defaultChecked);

  return (
    <div className="checkbox-wrapper">
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => setIsChecked((prev) => !prev)}
          {...props}
        />
        <span>{label}</span>
      </label>
    </div>
  );
};
export default Checkbox;
