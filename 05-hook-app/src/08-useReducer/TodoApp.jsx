import { useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
const initialState = [
  {
    id: new Date().getTime(),
    description: "Conseguir Madera",
    done: false,
  },
  {
    id: new Date().getTime() * 3,
    description: "Hacer una mesa de trabajo",
    done: false,
  },
  {
    id: new Date().getTime() * 4,
    description: "Matar a Herobrine",
    done: false,
  },
];

export const TodoApp = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const onNewTodo = (todo) => {
    console.log(todo)
  };

  return (
    <>
      <h1>TodoApp: 10 | Pendientes: 2</h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList todos={initialState}></TodoList>
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd onNewTodo={onNewTodo}></TodoAdd>
        </div>
      </div>
      {/* <ul>
        {state.map(({id, description}) => {
             <li key={id}>{description}</li>
        })}
      </ul> */}
    </>
  );
};
