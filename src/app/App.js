import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../container/home";
import Game from "../container/game";
import Players from "../container/players";
import GameContext from "../context/gameContext";
import { PLAYERS_TYPE } from "../utils/rules";
export default function App() {
  const INITIAL_VALUE = {
    noOfPlayer: 2,
    players: PLAYERS_TYPE.slice(0, 2),
    currentTurn: 0,
  };
  const [game, setGame] = useState(INITIAL_VALUE);
  return (
    <BrowserRouter>
      <GameContext.Provider value={{ game, setGame }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="game" element={<Game />} />
          <Route path="players" element={<Players />} />
        </Routes>
      </GameContext.Provider>
    </BrowserRouter>
  );
}
