import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../container/home";
import Game from "../container/game";
import Players from "../container/players";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="game" element={<Game />}/>
        <Route path="players" element={<Players />}/>
      </Routes>
    </BrowserRouter>
  );
}
