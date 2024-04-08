import { Navbar } from "../../ui";
import { Routes, Route, Navigate } from "react-router-dom";
import { DcPage, MarvelPage, HeroPage, SearchPage } from "../index";
export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container">
      <Routes >
        <Route path="/" element={<Navigate to="/marvel"></Navigate>}></Route>
        <Route path="/marvel" element={<MarvelPage />}></Route>
        <Route path="/dc" element={<DcPage />}></Route>
        <Route path="/hero/:id" element={<HeroPage />}></Route>
        <Route path="/search" element={<SearchPage />}></Route>
      </Routes>
      </div>
    </>
  );
};
