import { TodoItem } from "./TodoItem";
export const TodoList = ({ todos = [], onDeleteTodo, onToggleTodo }) => {
  return (
    <ul className="list-group">
      {todos.filter((todo)=>{return !todo.done}).map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDeleteTodo={onDeleteTodo}
            onToggleTodo={onToggleTodo}
          ></TodoItem>
        );
      })}
      {todos.filter((todo)=>{return todo.done}).map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDeleteTodo={onDeleteTodo}
            onToggleTodo={onToggleTodo}
          ></TodoItem>
        );
      })}
    </ul>
  );
};
