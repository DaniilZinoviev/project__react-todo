import React from "react";
import PropTypes from "prop-types";

function Todo({ item, onChange, onRemove, index }) {
  return (
    <li className={item.completed ? "todo-item checked" : "todo-item"}>
      <div>
        <input
          type="checkbox"
          className="checkbox"
          checked={item.completed}
          onChange={() => onChange(item.id)}
        />
        <span>{item.label}</span>
      </div>
      <button
        className="btn btn--close noselect"
        title="Remove todo"
        onClick={(e) => onRemove(item.id)}
      >
        &#x2716;
      </button>
    </li>
  );
}

Todo.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Todo;
