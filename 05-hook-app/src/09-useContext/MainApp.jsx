import { Routes, Route, Navigate, Link } from "react-router-dom";
import { HomePage } from "./HomePage";
import { AboutPage } from "./AboutPage";
import { LoginPage } from "./LoginPage";
import { Navbar } from "./Navbar";
import { UserProvider } from "./context/UserProvider";


export const MainApp = () => {
  return (
    <UserProvider>
      <h1>MainApp</h1>
      <hr />
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>} />
        <Route path="login" element={<LoginPage></LoginPage>} />
        <Route path="about" element={<AboutPage></AboutPage>} />
        <Route path="/*" element={<Navigate to="/about" />} />
      </Routes>
    </UserProvider>
  );
};
