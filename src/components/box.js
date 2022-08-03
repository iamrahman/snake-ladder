import React, { useContext, useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import snake from "../assets/snake.svg";
import ladder from "../assets/ladder.svg";
import { LADDER_RULES, LADDER_START_INDEX, PLAYERS_TYPE, SNAKE_RULES, SNAKE_START_INDEX } from "../utils/rules";
import Coin from "./coin";
import GameContext from "../context/gameContext";
function Box({ index, display, isSnake, isLadder, loading }) {
  const { game, setGame, currentTurn } = useContext(GameContext);
  const { position, noOfPlayer, } = game;
  const getColor = (display) => {
    const mod = display % 2;
    switch (mod) {
      case 0:
        return "#ffcccc";
      case 1:
        return "#99ccff";
    }
  };
  useEffect(() => {
    if(SNAKE_START_INDEX.includes(position[PLAYERS_TYPE[currentTurn]])) {
      setGame({...game, position: {...position, [PLAYERS_TYPE[currentTurn]]: SNAKE_RULES[`${position[PLAYERS_TYPE[currentTurn]]}`].to}})
    } else if (LADDER_START_INDEX.includes(position[PLAYERS_TYPE[currentTurn]])){
      setGame({...game, position: {...position, [PLAYERS_TYPE[currentTurn]]: LADDER_RULES[`${position[PLAYERS_TYPE[currentTurn]]}`].to}})
    }
  }, [game.position])
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      direction="row"
      style={{
        background: getColor(display),
        border: "1px solid black",
        width: 80,
        height: 80,
        float: "left",
      }}
    >
      <Grid item>
        <Typography color={"white"} fontWeight={900} fontSize={24}>
          {display}
        </Typography>
      </Grid>
      <Grid item style={{ width: "100%" }}>
        {(isSnake || isLadder) && (
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={6}>
              <img src={isSnake ? snake : ladder} alt="snake" />
            </Grid>
            <Grid item xs={6} textAlign="center">
              <div
                style={{
                  color: isSnake ? "#ff1a75" : "#33cc33",
                  height: "100%",
                  borderRadius: "50%",
                  textAlign: "center",
                  fontWeight: 700,
                  border: "1px solid black",
                  backgroundColor: "black",
                }}
              >
                {isSnake && <span>{SNAKE_RULES[`${display}`].to}</span>}
                {isLadder && <span>{LADDER_RULES[`${display}`].to}</span>}
              </div>
            </Grid>
          </Grid>
        )}
        {!(isSnake || isLadder) && (
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            {" "}
            {index === position.red && <Coin noOfPlayer={1} color="red" />}
            {index === position.blue  && <Coin noOfPlayer={1} color="blue" />}
            {index === position.green  && <Coin noOfPlayer={1} color="green" />}
            {index === position.yellow && <Coin noOfPlayer={1} color="yellow" />}
          </Grid>
        )}
      </Grid>
    </Grid>
  );
}

export default Box;
