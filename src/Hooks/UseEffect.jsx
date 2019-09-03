import React, { useState, useEffect } from "react";

export default function UseEffect() {
  const [todos, setTodos] = useState([]);
  const [fetchFlag, setFetchFlag] = useState(false);

  const fetchTodos = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(data => {
        if (data.status === 200) {
          return data.json();
        } else {
          throw new Error(`fetch todos failed`);
        }
      })
      .then(todos => {
        setTodos(todos);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const toggleFetchFlag = () => {
    setFetchFlag(!fetchFlag);
  };

  /**
   * conditionally run effect
   * if want to run effect only once, use [] as second parameter
   */
  useEffect(fetchTodos, [fetchFlag]);

  return (
    <>
      <button onClick={toggleFetchFlag}>fetch again</button>
      <div>{fetchFlag.toString()}</div>
      <ul>
        {todos &&
          todos.map(todo => (
            <li key={todo.id}>
              {todo.title} - {todo.completed ? "done" : "undone"}
            </li>
          ))}
      </ul>
    </>
  );
}
