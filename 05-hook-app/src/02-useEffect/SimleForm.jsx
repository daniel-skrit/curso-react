import { useEffect, useState } from "react";

export const SimleForm = () => {
  const [formState, setFormState] = useState({
    user: "strider",
    email: "fernando@google.es",
  });

  const { user, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({ ...formState, [name]: value });
  };

  useEffect(() => {
    console.log("componente renderizado por primera vez");
  }, []);


  
  useEffect(() => {
    console.log("formulario acambiado");
  }, [formState]);


    
  useEffect(() => {
    console.log("formulario acambiado");
  }, [formState]);

  
  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="user"
        value={user}
        onInput={onInputChange}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="fernando@google.com"
        name="email"
        value={email}
        onInput={onInputChange}
      />
    </>
  );
};
