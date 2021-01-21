import React, { useContext, useState } from "react";
import { StateContext } from "../Context";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import { SnackbarProvider, VariantType, useSnackbar } from "notistack";
import Validation from "../Validation";
interface TargetType {
  val: string;
  name: string;
}
interface NewUserType {
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
  id: number;
}


interface UserFormType {
  handleSaveUser: () => void;
  handleInputChange: (target: TargetType) => void;
  handleBackButton: () => void;
}

const useStyles = makeStyles((theme: Theme) =>
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

function UserForm({
  handleSaveUser,
  handleInputChange,
  handleBackButton,
}: UserFormType) {
  const [valid, setValid] = useState({
    first_name: "",
    last_name: "",
    email: "",
    firstValidation: true,
  });
  const value: NewUserType = useContext(StateContext);
  const { first_name, last_name, email } = value;
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const handleClickVariant = (variant: VariantType) => () => {
    enqueueSnackbar(" successful saved!", { variant });
    handleSaveUser();
  };
  const handleOnChange = (e: any) => {
    Validation({
      name: e.target.name,
      val: e.target.value,
      validation: valid,
    }).then((response: any) => setValid(response));
    handleInputChange({
      name: e.target.name,
      val: e.target.value,
    });
  };
  const checkDisable = () => {
    if (valid.firstValidation) {
      return true;
    } else {
      if (first_name && last_name && email) {
        if (valid.first_name || valid.last_name || valid.email) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    }
  };

  return (
    <div className={classes.cotainer}>
      <Grid container className={classes.root}>
        <Grid item xs={12} className={classes.paper} spacing={1}>
          <form>
            <Grid item xs={12} className={classes.row}>
              <Box className={classes.box}>
                <label>First name:</label>
              </Box>
              <TextField
                className={classes.textField}
                value={first_name}
                name="first_name"
                onChange={handleOnChange}
                error={valid.first_name ? true : false}
                id="outlined-error-helper-text"
                label="first name"
                helperText={valid.first_name}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} className={classes.row}>
              <Box className={classes.box}>
                <label>Last name:</label>
              </Box>
              <TextField
                className={classes.textField}
                value={last_name}
                name="last_name"
                onChange={handleOnChange}
                error={valid.last_name ? true : false}
                id="outlined-error-helper-text"
                label="first name"
                helperText={valid.last_name}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} className={classes.row}>
              <Box className={classes.box}>
                <label>Email:</label>
              </Box>
              <TextField
                className={classes.textField}
                type="email"
                value={email}
                name="email"
                onChange={handleOnChange}
                error={valid.email ? true : false}
                id="outlined-error-helper-text"
                label="first name"
                helperText={valid.email}
                variant="outlined"
              />
            </Grid>
          </form>
        </Grid>
        <Grid item xs={12} className={classes.paper}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleClickVariant("success")}
            className={classes.buttons}
            disabled={checkDisable()}
          >
            SAVE!
          </Button>

          <Link to="/">
            <Button
              variant="contained"
              onClick={handleBackButton}
              className={classes.buttons}
            >
              CANCEL
            </Button>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}
export default function IntegrationNotistack({
  handleSaveUser,
  handleInputChange,
  handleBackButton,
}: UserFormType) {
  return (
    <SnackbarProvider maxSnack={2}>
      <UserForm
        handleSaveUser={handleSaveUser}
        handleInputChange={handleInputChange}
        handleBackButton={handleBackButton}
      />
    </SnackbarProvider>
  );
}
