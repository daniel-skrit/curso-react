import { useRef } from "react";
import { useForm } from "../hooks/useForm";

export const TodoAdd = ({ onNewTodo }) => {
  //   const onNewTodo = (e) => {
  //     e.preventDefault();
  //     if(inputRef.current.value.trim() === "" || inputRef.current.value.trim() === null) return;
  //     const newTodo = newTodo = {
  //       id: new Date().getTime(),
  //       description: inputRef.current.value.trim(),
  //       done: false,
  //     };
  //     handleNewTodo(newTodo);
  //   };

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (description.trim() === "" || description.trim() === null) return;
    const newTodo = {
      id: new Date().getTime(),
      description: description,
      done: false,
    };
    onNewTodo(newTodo);
    onResetForm();
  };

  const { onInputChange, description, onResetForm } = useForm({
    description: "",
  });
  //   const inputRef = useRef();

  return (
    <form onSubmit={onFormSubmit}>
      <input
        // ref={inputRef}
        type="text"
        name="description"
        className="form-control"
        placeholder="¿Que hay que hacer?"
        onInput={onInputChange}
        value={description}
      />
      <button
        type="submit"
        className="btn btn-primary mt-2"
      >
        Agregar
      </button>
    </form>
  );
};
