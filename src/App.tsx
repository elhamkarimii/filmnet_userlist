import React, { useEffect, useReducer, useMemo } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainApp from "./Components/Pages/MainApp";
import EditUser from "./Components/Pages/EditUser";
import UserForm from "./Components/Pages/UserForm";
import reducer from "./Components/Reducer";
import { StateContext } from "./Components/Context";
interface Info {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}
interface TargetType {
  val: string;
  name: string;
}

function App() {
  const [{ data, searchedValue, value }, dispatch] = useReducer(reducer, {
    data: [],
    searchedValue: "",
    value: {
      first_name: "",
      last_name: "",
      email: "",
      id: 0,
      avatar: "",
    },
  });

  useEffect(() => {
    fetch("https://reqres.in/api/users?page=1")
      .then((res) => res.json())
      .then((res) =>
        dispatch({
          type: "HANDLE_GET_DATA",
          payload: res.data,
        })
      );
  }, []);

  const filteredData = useMemo(() => {
    const copyData = [...data];
    const filteredData = copyData.filter((item: Info) =>
      item["first_name"].toLowerCase().includes(searchedValue.toLowerCase())
    );
    return filteredData;
  }, [searchedValue, data]);

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

  function handleEditUser(user: Info) {
    dispatch({
      type: "HANDLE_EDIT_USER",
      payload: user,
    });
  }

  function handleBackButton() {
    dispatch({
      type: "HANDLE_BACK_BUTTON",
    });
  }
  return (
    <>
      <StateContext.Provider value={value}>
        <Router>
          <Switch>
            <Route path="/" exact>
              <MainApp
                handleSearchInput={handleSearchInput}
                handleSort={handleSort}
                filteredData={filteredData}
                handleDeleteUser={handleDeleteUser}
                handleEditUser={handleEditUser}
              />
            </Route>
            <Route path="/addUser">
              <UserForm
                handleSaveUser={() => handleSaveUser("add")}
                handleInputChange={handleInputChange}
                handleBackButton={handleBackButton}
              />
            </Route>
            <Route path="/editUser">
              <EditUser
                handleInputChange={handleInputChange}
                handleSaveUser={() => handleSaveUser("edit")}
                handleBackButton={handleBackButton}
              />
            </Route>
          </Switch>
        </Router>
      </StateContext.Provider>
    </>
  );
}

export default App;
