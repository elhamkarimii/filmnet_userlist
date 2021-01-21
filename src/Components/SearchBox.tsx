import React, { useReducer } from "react";
import reducer from "./Reducer";
import TextField from "@material-ui/core/TextField";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { FaSearch } from "react-icons/fa";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    serchBox: {
      width: "86%",
      display: "flex",
    },
    textField: {
      width: "90%",
    },
    box: {
      width: "5%",
      marginLeft: "40px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
    },
    icon: {
      fontSize: "20px",
    },
  })
);

interface TargetValue {
  value: string;
}
interface Event {
  target: TargetValue;
}
interface OnChangeFunction {
  onchange: (value: string) => void;
}

export default function SearchBox({ onchange }: OnChangeFunction) {
  const [{ value }, dispatch] = useReducer(reducer, {
    value: "",
  });
  const classes = useStyles();

  function handleChange({ target }: Event) {
    dispatch({
      type: "HANDLE_INPUT_CHANGE",
      payload: target.value
    })
    onchange(target.value);
  }
  return (
    <div className={classes.serchBox}>
      <Grid container spacing={1} alignItems="flex-end">
        <Grid item className={classes.icon}>
          <FaSearch />
        </Grid>
        <TextField
          className={classes.textField}
          label="search"
          id="mui-theme-provider-outlined-input"
          value={value}
          onChange={handleChange}
        />
      </Grid>
    </div>
  );
}
