import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";

function Todos({ items, onChange, onRemove, changeLabel }) {
  return (
    <ul className="todo-list fadeIn" style={{ animationDelay: ".75s" }}>
      {items.length
        ? items.map((item, index) => (
            <Todo
              item={item}
              onChange={onChange}
              onRemove={onRemove}
              changeLabel={changeLabel}
              index={index}
              key={item.id}
            />
          ))
        : <p>There are no todos!<span className="font-size-15">🤷‍♂️</span></p>}
    </ul>
  );
}

Todos.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Todos;
