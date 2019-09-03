import React, { useContext, useEffect } from "react";
import { Store } from "../contexts/store";

export default function UseContext() {
  
  const { state, dispatch } = useContext(Store);

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
        dispatch({
          type: "SET_TODOS",
          payload: todos
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(fetchTodos, []);

  return (
    <ul>
      {state.todos &&
        state.todos.map(todo => (
          <li key={todo.id}>
            {todo.title} - {todo.completed ? "done" : "undone"}
          </li>
        ))}
    </ul>
  );
}
