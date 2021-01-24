import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import {useStyles} from "./style"

interface Func {
  onHandleSort: (val: number) => void;
} 

export default function SortBox({ onHandleSort }: Func) {
  const classes = useStyles();
  return (
    <div>
      <Link to="/addUser">
        <Button variant="contained" color="primary" className={classes.sort}>
          ADD
        </Button>
      </Link>
      <Button
        variant="contained"
        onClick={() => onHandleSort(1)}
        className={classes.sort}
      >
        ascending
      </Button>
      <Button
        variant="contained"
        onClick={() => onHandleSort(-1)}
        className={classes.sort}
      >
        descending
      </Button>
    </div>
  );
}
