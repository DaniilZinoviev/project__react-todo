import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function Todo({ item, onChange, onRemove, changeLabel, index }) {
  const [view, setView] = useState("default");
  const [label, setLabel] = useState(item.label);

  function handleLabel(e) {
    e.preventDefault();
    console.log(`Change label from "${item.label}" to "${label}".`);
    changeLabel(item.id, label);
    setView("default");
  }

  function onEdit() {
    if (view !== "edit") {
      setView("edit");
    } else {
      setLabel(item.label);
      setView("default");
    }
  }

  return (
    <li className={item.completed ? "todo-item checked" : "todo-item"}>
      <div>
        
        <input
          type="checkbox"
          className="checkbox"
          checked={item.completed}
          onChange={() => onChange(item.id)}
        />

        {view === "edit" ? (
          <form onSubmit={(e) => handleLabel(e)} className="d-inline-block">
            <input
              type="text"
              value={label}
              onChange={(e) => setLabel(e.target.value)}
              autoFocus={true}
            />
          </form>
        ) : (
          <span>{item.label}</span>
        )}
      </div>

      <div className="buttons">
        <button
          className="btn btn--edit noselect"
          title="Edit todo"
          onClick={(e) => onEdit(item.id)}
        >
          &#9998;
        </button>

        <button
          className="btn btn--close noselect"
          title="Remove todo"
          onClick={(e) => onRemove(item.id)}
        >
          &#x2716;
        </button>
      </div>
    </li>
  );
}

Todo.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Todo;
