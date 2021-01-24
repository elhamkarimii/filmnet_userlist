import React, { useEffect, useReducer, useMemo } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainApp from "./Components/Pages/MainApp/index";
import EditUser from "./Components/Pages/EditUser/index";
import UserForm from "./Components/Pages/UserForm/index";
import { StateContext } from "./Components/Context";
import useData from "./Components/useData"
import IntegrationNotistack from "./Components/Pages/UserForm/index";
import reducer from "./Components/Reducer";

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
 const {filteredData} = useData({dispatch,searchedValue,data})

  return (
    <>
      <StateContext.Provider value={{value,dispatch,filteredData}}>
        <Router>
          <Switch>
            <Route path="/" exact component={MainApp} />
            <Route path="/addUser" component={UserForm} />
            <Route path="/editUser" component={EditUser} />
          </Switch>
        </Router>
      </StateContext.Provider>
    </>
  );
}

export default App;
