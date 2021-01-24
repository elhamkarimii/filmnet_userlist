interface Info {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

interface StateType {
  data: Info[];
  searchedValue: string;
  value: {
    first_name: string;
    last_name: string;
    email: string;
    id: number;
    avatar: string;
  };
}
interface ActionType {
  type: string,
  payload?: any
}
export default function reducer(state: StateType, action: ActionType) {
  return ACTION[action.type](state, action);
}

const ACTION: any = {
  "HANDLE_GET_DATA": handleGetData,
  "HANDLE_INPUT_CHANGE": handleInputChange,
  "HANDLE_SEARCHED_VALUE": handleSearchedValue,
  "HANDLE_SORT_DATA": handleSortData,
  "HANDLE_DELETE_USER": handleDeleteUser,
  "HANDLE_SAVE_USER": handleSaveUser,
  "HANDLE_USER_INPUT": handleUserInput,
  "HANDLE_EDIT_USER": handleEditUser,
  "HANDLE_BACK_BUTTON": handleBackButton, 
};

function handleGetData(state: StateType, action: ActionType) {
  return {
    ...state,
    data: action.payload,
  };
}
function handleInputChange(state: StateType, action: ActionType) {
  return {
    ...state,
    value: action.payload,
  };
}

function handleSearchedValue(state: StateType, action: ActionType) {
  return {
    ...state,
    searchedValue: action.payload,
  };
}

function handleSortData(state: StateType, action: ActionType) {
  const copyData = [...state.data];
  const sortData = copyData.sort((a, b) => {
    if (a["first_name"] < b["first_name"]) {
      return -1 * action.payload;
    } else if (a["first_name"] > b["first_name"]) {
      return 1 * action.payload;
    } else {
      return 0;
    }
  });
  return {
    ...state,
    data: sortData,
  };
}

function handleDeleteUser(state: StateType, action: ActionType) {
  const copyData = [...state.data];
  const newData = copyData.filter((item) => item.id !== action.payload);
  return {
    ...state,
    data: newData,
  };
}

function handleSaveUser(state: StateType, action: ActionType) {
  const copyData = [...state.data];
  console.log(state.value, "value");
  if (action.payload === "add") {
    const newItem = {
      ...state.value,
      id: state.data.length + 1,
      avatar: "http://unsplash.it/221/221",
    };
    copyData.push(newItem);
  } else {
    const index = copyData.findIndex((item) => item.id === state.value.id);
    copyData[index] = state.value;
  }
  console.log(copyData, "eli");
  return {
    ...state,
    data: copyData,
  };
}

function handleUserInput(state: StateType, action: ActionType) {
  return {
    ...state,
    value: {
      ...state.value,
      [action.payload.name]: action.payload.val,
    },
  };
}

function handleEditUser(state: StateType, action: ActionType) {
  console.log(action.payload,'payload')
  return {
    ...state,
    value: {
      first_name: action.payload.first_name,
      last_name: action.payload.last_name,
      email: action.payload.email,
      id: action.payload.id,
      avatar: action.payload.avatar,
    },
  };
}

function handleBackButton(state: StateType) {
  return {
    ...state,
    value: {
      first_name: "",
      last_name: "",
      email: "",
      id: 0,
      avatar: "",
    },
  };
}
