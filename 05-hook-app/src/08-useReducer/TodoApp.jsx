import { useTodo } from "../hooks/useTodo";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

export const TodoApp = () => {
  const { todos, handleDelete, handleNewTodo, handleToggle, todosCount, todosPendingCount } = useTodo();
  
  return (
    <>
      <h1>TODO: {todosCount} | Pendientes: {todosPendingCount}</h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            onDeleteTodo={handleDelete}
            onToggleTodo={handleToggle}
          ></TodoList>
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd onNewTodo={handleNewTodo}></TodoAdd>
        </div>
      </div>
    </>
  );
};
