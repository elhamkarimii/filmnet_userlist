import React, { useReducer } from "react";
import reducer from "../Reducer";
import TextField from "@material-ui/core/TextField";
import { Grid } from "@material-ui/core";
import { FaSearch } from "react-icons/fa";
import {useStyles} from "./style"

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
