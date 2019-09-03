import React, { useState } from "react";

export default function UseState() {
  const [todos, setTodos] = useState([]);

  const initTodos = () => {
    setTodos([{ name: "buy milk", done: false }]);
  };

  return (
    <div>
      <button onClick={initTodos}>init todos</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.name}>
            {todo.name} - {todo.done ? "done" : "undone"}
          </li>
        ))}
      </ul>
    </div>
  );
}
