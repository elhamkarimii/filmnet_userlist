import React from "react";
import UserForm from "./UserForm";

interface TargetType {
  val: string;
  name: string;
}
interface UserFormType {
  handleSaveUser: () => void;
  handleInputChange: (target: TargetType) => void;
  handleBackButton: () => void;
}
export default function EditUser({
  handleSaveUser,
  handleInputChange,
  handleBackButton,
}: UserFormType) {
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
