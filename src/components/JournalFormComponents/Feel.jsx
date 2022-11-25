import React from "react";
import "./Feel.scss";

export default function Feel() {
  return (
    <div className="container">
      <div className="row1">
        <div className="line1 excited">
          <label>
            <input type="checkbox" value="1" />
            excited
          </label>
        </div>
        <div className="line1 joyful">
          <label>
            <input type="checkbox" value="1" />
            joyful
          </label>
        </div>
      </div>
    </div>
  );
}
