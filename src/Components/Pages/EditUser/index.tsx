import React, { useContext } from "react";
import useData from "../../useData";
import UserForm from "../UserForm/index";
import {StateContext} from '../../Context'
interface TargetType {
  val: string;
  name: string;
}
interface UserFormType {
  handleSaveUser: (mode: string) => void;
  handleInputChange: (target: TargetType) => void;
  handleBackButton: () => void;
}
export default function EditUser() { 

const {dispatch} = useContext(StateContext)
  function handleSaveUser(mode: string) {
    dispatch({
      type: "HANDLE_SAVE_USER",
      payload: mode,
    });
  }
  function handleInputChange({ name, val }: TargetType) {
    dispatch({
      type: "HANDLE_USER_INPUT",
      payload: {
        name: name,
        val: val,
      }, 
    });
  }
  function handleBackButton() {
    dispatch({
      type: "HANDLE_BACK_BUTTON",
    });
  }
  return (
    <div>
      <UserForm
        handleSaveUser={handleSaveUser}
        handleInputChange={handleInputChange}
        handleBackButton={handleBackButton}
      />
    </div>
  );
}
