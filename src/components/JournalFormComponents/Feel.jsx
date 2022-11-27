import React from "react";
import "./Feel.scss";

export default function Feel() {
  return (
    <div className="feel-container">
      <div className="feel-container__feel-positive">
        <div className="feel-positive excited">
          <label>
            <input type="checkbox" value="1" />
            excited
          </label>
        </div>
        <div className="feel-positive joyful">
          <label>
            <input type="checkbox" value="1" />
            joyful
          </label>
        </div>
        <div className="feel-positive amazed">
          <label>
            <input type="checkbox" value="1" />
            amazed
          </label>
        </div>
        <div className="feel-positive grateful">
          <label>
            <input type="checkbox" value="1" />
            grateful
          </label>
        </div>
        <div className="feel-positive accomplished">
          <label>
            <input type="checkbox" value="1" />
            accomplished
          </label>
        </div>
        <div className="feel-positive thankful">
          <label>
            <input type="checkbox" value="1" />
            thankful
          </label>
        </div>
        <div className="feel-positive proud">
          <label>
            <input type="checkbox" value="1" />
            proud
          </label>
        </div>
      </div>
      <div className="feel-container__feel-neutral">
        <div className="feel-neutral productive">
          <label>
            <input type="checkbox" value="1" />
            productive
          </label>
        </div>
        <div className="feel-neutral active">
          <label>
            <input type="checkbox" value="1" />
            active
          </label>
        </div>
        <div className="feel-neutral relaxed">
          <label>
            <input type="checkbox" value="1" />
            relaxed
          </label>
        </div>
        <div className="feel-neutral calm">
          <label>
            <input type="checkbox" value="1" />
            calm
          </label>
        </div>
        <div className="feel-neutral optimistic">
          <label>
            <input type="checkbox" value="1" />
            optimistic
          </label>
        </div>
        <div className="feel-neutral chilled">
          <label>
            <input type="checkbox" value="1" />
            chilled
          </label>
        </div>
        <div className="feel-neutral supported">
          <label>
            <input type="checkbox" value="1" />
            supported
          </label>
        </div>
      </div>
      <div className="feel-container__feel-negative">
        <div className="feel-negative sad">
          <label>
            <input type="checkbox" value="1" />
            sad
          </label>
        </div>
        <div className="feel-negative nervous">
          <label>
            <input type="checkbox" value="1" />
            nervous
          </label>
        </div>
        <div className="feel-negative impatient">
          <label>
            <input type="checkbox" value="1" />
            impatient
          </label>
        </div>
        <div className="feel-negative bored">
          <label>
            <input type="checkbox" value="1" />
            bored
          </label>
        </div>
        <div className="feel-negative worried">
          <label>
            <input type="checkbox" value="1" />
            worried
          </label>
        </div>
        <div className="feel-negative meh">
          <label>
            <input type="checkbox" value="1" />
            meh
          </label>
        </div>
        <div className="feel-negative overwhelmed">
          <label>
            <input type="checkbox" value="1" />
            overwhelmed
          </label>
        </div>
      </div>
    </div>
  );
}
