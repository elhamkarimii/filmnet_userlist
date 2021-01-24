import React, { useContext } from "react";
import SearchBox from "../../SearchBox/index";
import SortBox from "../../SortBox/index";
import UserList from "../../UserList/index";
import Grid from "@material-ui/core/Grid";
import {useStyles} from "./style"
import { Box } from "@material-ui/core";
import UserNotFound from "../../UserNotFound/index";
import useData from "../../useData";
import { StateContext } from "../../Context";

interface Info {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export default function MainApp() {

  const classes = useStyles();
  const {dispatch,filteredData} = useContext(StateContext)

  function handleSearchInput(value: string) {
    dispatch({
      type: "HANDLE_SEARCHED_VALUE",
      payload: value,
    });
  }

  function handleSort(val: number) {
    dispatch({
      type: "HANDLE_SORT_DATA",
      payload: val,
    });
  }

  function handleDeleteUser(id: number) {
    dispatch({
      type: "HANDLE_DELETE_USER",
      payload: id,
    });
  }

  function handleEditUser(user: Info) {
    dispatch({
      type: "HANDLE_EDIT_USER",
      payload: user,
    });
  }

  return (
    <div>
      <Grid container xs={12} className={classes.searchPanel}>
        <Box className={classes.searchBox}>
          <SearchBox onchange={handleSearchInput} />
        </Box>
        <Box className={classes.sortBox}>
          <SortBox onHandleSort={handleSort} />
        </Box>
      </Grid>
      {filteredData.length > 0 ? (
        <UserList
          data={filteredData}
          handleDeleteUser={handleDeleteUser}
          handleEditUser={handleEditUser}
        />
      ) : (
        <UserNotFound />
      )}
    </div>
  );
}
