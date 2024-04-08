import { Routes, Route } from "react-router-dom";
import { LoginPage } from "../auth";
import { HeroesRoutes } from "../heroes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="/login/*"
          element={
            <PublicRoute>
              <Routes>
                <Route path="/*" element={<LoginPage/>}></Route>
              </Routes>
            </PublicRoute>
          }
        ></Route>
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <HeroesRoutes />
            </PrivateRoute>
          }
        ></Route>
      </Routes>
    </>
  );
};
