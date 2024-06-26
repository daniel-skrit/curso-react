import { useState } from "react";
import { useGetTodoQuery, useGetTodosQuery } from "./store/apis/todosApi";

export const TodoApp = () => {
  const [todoId, setTodoId] = useState(1);
  const { data: todo, isLoading } = useGetTodoQuery(todoId);
  const nextTodo = () => {
    setTodoId(todoId + 1);
  };

  const previousTodo = () => {
    if (todoId === 1) return;
    setTodoId(todoId - 1);
  };

  return (
    <>
      <h1>TODOs - RTK Query</h1>
      <hr />
      <h4>Loading: {isLoading ? "True" : "False"}</h4>
      <pre>{JSON.stringify(todo)}</pre>
      {/* <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul> */}
      <button onClick={nextTodo}>Next</button>
      <button onClick={previousTodo}>Previous</button>
    </>
  );
};
