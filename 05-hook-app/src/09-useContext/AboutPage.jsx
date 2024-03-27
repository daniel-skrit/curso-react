import { UserContext } from "./context/UserContext";
import { useContext } from "react";
export const AboutPage = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <h1>About Page</h1>
      <hr />
      <pre>{JSON.stringify(user)}</pre>
    </>
  );
};
