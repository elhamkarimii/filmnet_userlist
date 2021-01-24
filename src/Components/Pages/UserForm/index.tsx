import React, { useContext, useState } from "react";
import { StateContext } from "../../Context";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { Box } from "@material-ui/core";
import { SnackbarProvider, VariantType, useSnackbar } from "notistack";
import Validation from "../../Validation";
import {useStyles} from "./style"
import useData from "../../useData";

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
  handleSaveUser: (mode: string) => void;
  handleInputChange: (target: TargetType) => void;
  handleBackButton: () => void;
}

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
  console.log(value,'value')
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();

  const handleClickVariant = (variant: VariantType) => () => {
    enqueueSnackbar(" successful saved!", { variant });
    handleSaveUser('edit');
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
export default function IntegrationNotistack(props:UserFormType) { 

  // const { dispatch } = useData();
  // function handleSaveUser(mode: string) {
  //   dispatch({
  //     type: "HANDLE_SAVE_USER",
  //     payload: mode,
  //   });
  // }
  // function handleInputChange({ name, val }: TargetType) {
  //   dispatch({
  //     type: "HANDLE_USER_INPUT",
  //     payload: {
  //       name: name,
  //       val: val,
  //     }, 
  //   });
  // }
  // function handleBackButton() {
  //   dispatch({
  //     type: "HANDLE_BACK_BUTTON",
  //   });
  // }
  
  return (
    <SnackbarProvider maxSnack={2} >
      <UserForm
      {...props}
      />
    </SnackbarProvider>
  );
}
