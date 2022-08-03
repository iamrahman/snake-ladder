import React, { useEffect, useState } from "react";
import { Button, Grid, Typography } from "@mui/material";
import useStyles from "./styles";
import Box from "../../components/box";
import { GAME_INDEX } from "../../utils/board";
import { LADDER_START_INDEX, SNAKE_START_INDEX } from "../../utils/rules";
import Dice from "../../components/dice";
import { genrateRandomNum } from "../../utils/func";
function Game() {
  const classes = useStyles();
  const [diceValue, setDiceValue] = useState(1);
  const [loading, setLoading] = useState(false);
  const [noOfPlayer, setNoOfPlayer] = useState(1);
  const [position, setPosition] = useState({
    red: 0,
    blue: 0,
    green: 0,
    yellow: 0,
  });
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
        setPosition({...position, red: position.red + flag});
        flag++;
      }
    }
  }, [diceValue])
  useEffect(() => {
    if(!loading) {
      setDiceValue(0)
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
                  noOfPlayer={noOfPlayer}
                  display={box.display}
                  isSnake={SNAKE_START_INDEX.includes(box.display)}
                  isLadder={LADDER_START_INDEX.includes(box.display)}
                  position={position}
                  setPosition={setPosition}
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
