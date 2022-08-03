import React, { useContext, useEffect, useState } from "react";
import { Button, Grid, Typography } from "@mui/material";
import useStyles from "./styles";
import Box from "../../components/box";
import { GAME_INDEX } from "../../utils/board";
import { LADDER_START_INDEX, PLAYERS_TYPE, SNAKE_START_INDEX } from "../../utils/rules";
import Dice from "../../components/dice";
import { genrateRandomNum } from "../../utils/func";
import gameContext from "../../context/gameContext";
function Game() {
  const classes = useStyles();
  const { game, setGame } = useContext(gameContext);
  const { noOfPlayer, players, currentTurn, position  } = game;
  console.log({game})
  const [diceValue, setDiceValue] = useState(1);
  const [loading, setLoading] = useState(false);
  const rollTheDice = () => {
    const value = genrateRandomNum();
    setDiceValue(value);
  };
  useEffect(() => {
    let flag = 1;
    const id = setInterval(frame, 300);
    function frame() {
      if (flag > diceValue) {
        setLoading(false);
        clearInterval(id);
        flag = 1;
      } else {
        setLoading(true);
        setGame({...game, position: {...position, [PLAYERS_TYPE[currentTurn]]: position[PLAYERS_TYPE[currentTurn]] + flag}});
        flag++;
      }
    }
  }, [diceValue]);

  useEffect(() => {
    if(!loading) {
      setDiceValue(0);
      setGame({...game, currentTurn: game.noOfPlayer === currentTurn+1 ? 0 : currentTurn+1 })
    }
  }, [loading]);
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="start"
      direction="row"
      className={classes.root}
    >
      <Grid item xl={3} lg={3} md={12} className={classes.stats}>
        <Typography>Stats</Typography>
        <Dice value={diceValue} />
        {`Turn : => ` + PLAYERS_TYPE[currentTurn]} <br/>
        <Button variant="contained" color="info" onClick={rollTheDice}>
          Roll
        </Button>
      </Grid>
      <Grid item xl={9} lg={9} md={12} className={classes.board}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item style={{ width: 800 }}>
            {GAME_INDEX.reverse().map((box) => {
              return (
                <Box
                  key={box.index}
                  index={box.index}
                  display={box.display}
                  isSnake={SNAKE_START_INDEX.includes(box.display)}
                  isLadder={LADDER_START_INDEX.includes(box.display)}
                  loading={loading}
                />
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Game;
