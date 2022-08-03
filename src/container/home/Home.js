import { Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import useStyles from "./style";
import logoSrc from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
function Home() {
  const classes = useStyles();
  const navigateTo = useNavigate();
  const [loading, setLoading] = useState(false);
  const [percentage, setPercentage] = useState(0);
  useEffect(() => {
    if (loading && percentage < 100) {
      setTimeout(() => {
        setPercentage(percentage + 12.5);
      }, 500);
    } else if(loading && percentage >= 100){
      navigateTo('/players')
    }
  }, [loading, percentage]);

  return (
    <Grid
      container
      justifyContent={"center"}
      alignItems="center"
      direction="column"
      className={classes.root}
    >
      <Grid item>
        <img className={classes.logo} src={logoSrc} alt="img" />
      </Grid>
      <Grid item>
        <p className={classes.title}>Snake & Ladder</p>
      </Grid>
      {!loading && (
        <Grid item>
          <Button
            color="success"
            variant="contained"
            className={classes.play}
            onClick={() => setLoading(!loading)}
          >
            <p className={classes.playText}>Play</p>
          </Button>
        </Grid>
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
              <Typography className={classes.loadingText}>Loading...</Typography>
            </Grid>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
}

export default Home;
