import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cotainer: {
      width: "100vw",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#D3D3D3",
    },
    root: {
      flexGrow: 1,
      maxWidth: "50%",
      display: "flex ",
      justifyContent: "center ",
      alignItems: "center ",
      backgroundColor: "#F2F2F2",
      borderRadius: "7px",
      boxShadow: "2px 2px 15px #555555",
    },
    paper: {
      padding: "10px",
      textAlign: "center",
      color: theme.palette.text.secondary,
      flexBasis: "none",
      display: "flex",
      justifyContent: "center",
      marginTop: "10px",
    },
    row: {
      display: "flex",
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
    },
    box: {
      display: "flex",
      width: "100px",
      alignItems: "center",
    },
    textField: {
      marginTop: "25px",
    },
    buttons: {
      padding: "10px 40px",
      margin: "40px 10px",
    },
  })
);