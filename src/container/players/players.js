import { Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logoSrc from "../../assets/logo.png";
import useStyles from "./styles";
function Player() {
  const classes = useStyles();
  const [noOfPlayers, setNoOfPlayer] = useState(2);
  const [loading, setLoading] = useState(false);
  const [percentage, setPercentage] = useState(0);
  const navigateTo = useNavigate();
  function changePlayerNumber(num) {
    setNoOfPlayer(num);
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
            className={noOfPlayers === 2 ? classes.selected : classes.select}
            onClick={() => changePlayerNumber(2)}
          >
            <Typography
              className={
                noOfPlayers === 2
                  ? classes.playerTextSelected
                  : classes.playerText
              }
            >
              Two Players
            </Typography>
          </Grid>
          <Grid
            item
            className={noOfPlayers === 3 ? classes.selected : classes.select}
            onClick={() => changePlayerNumber(3)}
          >
            <Typography
              className={
                noOfPlayers === 3
                  ? classes.playerTextSelected
                  : classes.playerText
              }
            >
              Three Players
            </Typography>
          </Grid>
          <Grid
            item
            className={noOfPlayers === 4 ? classes.selected : classes.select}
            onClick={() => changePlayerNumber(4)}
          >
            <Typography
              className={
                noOfPlayers === 4
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
              onClick={() => setLoading(!loading)}
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
