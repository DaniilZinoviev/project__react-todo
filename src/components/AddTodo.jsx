import React, { useState } from "react";
// import PropTypes from "prop-types";

function AddTodo({ onAdd }) {
  const [value, setValue] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    let val = value.trim();
    if (val) {
      console.log(value);
      onAdd(value);
      setValue("");
    }
  }

  return (
    <form
      className="form--add fadeIn"
      style={{animationDelay: ".25s"}}
      onSubmit={(e) => onSubmit(e)}
    >
      <input
        type="text"
        placeholder="Add a new todo"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="btn noselect">
        Add
      </button>
    </form>
  );
}

// AddTodo.propTypes = {};

export default AddTodo;
