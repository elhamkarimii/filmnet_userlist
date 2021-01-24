import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
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