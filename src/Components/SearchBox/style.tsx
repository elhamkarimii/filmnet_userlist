import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
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