export const TodoItem = ({ todo }) => {
  return (
    <li
      className="list-group-item justify-content-between d-flex"
    >
      <span className="align-self-center">{todo.description}</span>
      <button className="btn btn-danger ">Eliminar</button>
    </li>
  );
};
