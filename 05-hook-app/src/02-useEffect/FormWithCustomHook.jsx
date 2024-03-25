import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
  const {user, email, password , onInputChange} = useForm({
    user: "",
    email: "",
    password: "",
  });

  // const { user, email, password } = formState;

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
      <input
        type="password"
        className="form-control mt-2"
        placeholder="Password"
        name="password"
        value={password}
        onInput={onInputChange}
      />
    </>
  );
};
