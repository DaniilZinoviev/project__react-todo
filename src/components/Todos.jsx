import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";

function Todos({ items, onChange, onRemove }) {
  return (
    <ul className="todo-list fadeIn" style={{ animationDelay: ".75s" }}>
      {items.length
        ? items.map((item, index) => (
            <Todo
              item={item}
              onChange={onChange}
              onRemove={onRemove}
              index={index}
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
