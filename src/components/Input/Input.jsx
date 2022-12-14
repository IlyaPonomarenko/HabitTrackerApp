import "./Input.scss";
import React from "react";

const Input = ({
  type = "date",
  name = "name",
  id = "id",
  label = "label",
  state,
  onChange,
  inputRef,
}) => {
  return (
    <div className="input">
      <label className="input__label" for={id}>
        {label}
      </label>
      <input
        ref={inputRef}
        onChange={onChange}
        className="input__field"
        type={type}
        name={name}
        id={id}
      />
      ;
    </div>
  );
};

export default Input;
