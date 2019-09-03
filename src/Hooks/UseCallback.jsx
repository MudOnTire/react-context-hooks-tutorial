import React, { useState, useEffect, useCallback } from "react";

let todoId = 1;

export default function UseCallback() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(res => res.json())
      .then(todos => setTodos(todos))
      .catch(err => console.log(err));
  };

  useEffect(fetchTodos, []);

  const fetchTodo = () => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
      .then(res => res.json())
      .then(todo => console.log(todo))
      .catch(err => console.log(err));
  };

  const memoizedFetchTodo = useCallback(fetchTodo, [todoId]);

  return (
    <ul>
      {todos &&
        todos.map(todo => {
          return (
            <li key={todo.id}>
              <p>{todo.title}</p>
              <button
                onClick={() => {
                  todoId = todo.id;
                  memoizedFetchTodo();
                }}
              >
                detail
              </button>
            </li>
          );
        })}
    </ul>
  );
}
