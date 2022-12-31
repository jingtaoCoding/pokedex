import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/landingPage"
import SinglePokemonPage from "../pages/singlePokemonPage";
const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/details/:id" element={<SinglePokemonPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;