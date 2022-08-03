import { Button, Grid, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logoSrc from "../../assets/logo.png";
import GameContext from "../../context/gameContext";
import { PLAYERS_TYPE } from "../../utils/rules";
import useStyles from "./styles";
function Player() {
  const classes = useStyles();
  const { game, setGame } = useContext(GameContext);
  const { noOfPlayer } = game;
  const [loading, setLoading] = useState(false);
  const [percentage, setPercentage] = useState(0);
  const navigateTo = useNavigate();
  function changePlayerNumber(num) {
    setGame({
      ...game,
      noOfPlayer: num,
      players: PLAYERS_TYPE.slice(0, num),
      currentTurn: 0,
    });
  }
  function startGame() {
    setLoading(!loading);
    let players = {};
    game?.players?.forEach((player) => {
      players = {
        ...players,
        [`${player}`]: 0
      };
    });
    setGame({...game, position: players})
  }
  useEffect(() => {
    if (loading && percentage < 100) {
      setTimeout(() => {
        setPercentage(percentage + 12.5);
      }, 500);
    } else if (loading && percentage >= 100) {
      navigateTo("/game");
    }
  }, [loading, percentage]);

  return (
    <Grid
      container
      direction="column"
      justifyContent={"center"}
      alignItems="center"
      className={classes.root}
    >
      <Grid item>
        <img className={classes.logo} src={logoSrc} alt="img" />
      </Grid>
      {!loading && (
        <React.Fragment>
          <Grid item>
            <Typography className={classes.title}>
              Select number of players
            </Typography>
          </Grid>
          <Grid
            item
            className={noOfPlayer === 2 ? classes.selected : classes.select}
            onClick={() => changePlayerNumber(2)}
          >
            <Typography
              className={
                noOfPlayer === 2
                  ? classes.playerTextSelected
                  : classes.playerText
              }
            >
              Two Players
            </Typography>
          </Grid>
          <Grid
            item
            className={noOfPlayer === 3 ? classes.selected : classes.select}
            onClick={() => changePlayerNumber(3)}
          >
            <Typography
              className={
                noOfPlayer === 3
                  ? classes.playerTextSelected
                  : classes.playerText
              }
            >
              Three Players
            </Typography>
          </Grid>
          <Grid
            item
            className={noOfPlayer === 4 ? classes.selected : classes.select}
            onClick={() => changePlayerNumber(4)}
          >
            <Typography
              className={
                noOfPlayer === 4
                  ? classes.playerTextSelected
                  : classes.playerText
              }
            >
              Four Players
            </Typography>
          </Grid>
          <Grid item>
            <Button
              color="success"
              variant="contained"
              className={classes.play}
              onClick={startGame}
            >
              <p className={classes.playText}>Start</p>
            </Button>
          </Grid>{" "}
        </React.Fragment>
      )}
      {loading && (
        <Grid item>
          <Grid
            container
            justifyContent="center"
            direction="column"
            alignItems="center"
          >
            <Grid item className={classes.loading}>
              <div
                style={{
                  backgroundColor: "gray",
                  height: 24,
                  width: `${percentage}%`,
                  transition: "all 1s",
                }}
              ></div>
            </Grid>
            <Grid item>
              <Typography className={classes.loadingText}>
                {`Preparing game for you...`}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
}

export default Player;
