import React from "react";
import SearchBox from "../SearchBox";
import SortBox from "../SortBox";
import UserList from "../UserList";
import Grid from "@material-ui/core/Grid";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import UserNotFound from "../UserNotFound";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    searchPanel: {
      padding: "10px 0px 50px 0",
      display: "flex",
      alignItems: "center",
      boxSizing: "border-box",
      justifyContent: "space-between",
    },
    searchBox: {
      display: "flex",
      justifyContent: "center",
      width: "70%",
    },
    sortBox: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      width: "27%",
      paddingTop: "10px",
    },
  })
);

interface Info {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

interface MainAppType {
  handleSearchInput: (value: string) => void;
  handleSort: (val: number) => void;
  filteredData: Info[];
  handleDeleteUser: (id: number) => void;
  handleEditUser: (user: Info) => void;
}

export default function MainApp({
  handleSearchInput,
  handleSort,
  filteredData,
  handleDeleteUser,
  handleEditUser,
}: MainAppType) {
  const classes = useStyles();
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
