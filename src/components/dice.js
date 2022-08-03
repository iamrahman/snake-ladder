import React from "react";
import { Grid, Typography } from "@mui/material";
function Dice({value}) {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      direction="row"
    >
      <Grid item>
        <Typography color={"white"} fontWeight={900} fontSize={24}>
          {value}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Dice;
