import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TableCell } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {useStyles} from "./style"

interface Info {
  id: number;
  email?: string;
  first_name?: string;
  last_name?: string;
  avatar: string;
}

interface InfoType {
  info: Info;
  handleDeleteUser: () => void;
  handleEditUser: () => void;
}

export default function UserInfo({
  info,
  handleDeleteUser,
  handleEditUser,
}: InfoType) {
  const classes = useStyles()
  return (
    <>
      <TableCell component="th" scope="row">
        <img
          src={info.avatar}
          alt={info.id.toString()}
          width="121px"
          height="121px"
        />
      </TableCell>
      <TableCell align="right">{info.first_name}</TableCell>
      <TableCell align="right">{info.last_name}</TableCell>
      <TableCell align="right">{info.email}</TableCell>
      <TableCell align="right">
        <Link to="/editUser">
          <Button
            variant="contained"
            onClick={handleEditUser}
            className={classes.optionBtn}
          >
            EDIT
          </Button>
        </Link>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleDeleteUser}
          className={classes.optionBtn}
        >
          DELETE
        </Button>
      </TableCell>
    </>
  );
}
