import React, { useState } from "react";
import "./App.css";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, completed: false, label: "Buy a T-Short" },
    { id: 3, completed: true, label: "Spend 30 minutes for reading" },
  ]);

  function onChange(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }

  function onAdd(label) {
    setTodos(
      todos.concat([
        {
          id: Math.random(),
          label: label,
          completed: false,
        },
      ])
    );
  }

  function changeLabel(id, newLabel) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.label = newLabel;
        }
        return todo;
      })
    );
  }

  function onRemove(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div className="container">
      <h1 className="fadeIn">TODO App</h1>
      <AddTodo onAdd={onAdd}/>
      <Todos items={todos} onChange={onChange} onRemove={onRemove} changeLabel={changeLabel} />
    </div>
  );
}

export default App;
