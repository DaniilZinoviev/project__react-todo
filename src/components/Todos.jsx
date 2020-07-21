import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";

function Todos({ items, onChange, onRemove }) {
  return (
    <ul className="todo-list">
      {items.length
        ? items.map((item) => (
            <Todo
              item={item}
              onChange={onChange}
              onRemove={onRemove}
              key={item.id}
            />
          ))
        : "There are no todos!"}
    </ul>
  );
}

Todos.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Todos;
