import React from "react";
import Grid from "@material-ui/core/Grid";
import {useStyles} from "./style"

export default function UserNotFound() {
  const classes = useStyles();
  return (
    <Grid className={classes.errorBox}>
      <h3>user not found : (</h3>
    </Grid>
  );
}
