import React from "react";
import Grid from "@material-ui/core/Grid";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    errorBox: {
      marginLeft: "70px",
    },
  })
);

export default function UserNotFound() {
  const classes = useStyles();
  return (
    <Grid className={classes.errorBox}>
      <h3>user not found : (</h3>
    </Grid>
  );
}
