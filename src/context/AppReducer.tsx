import { Reducer, useReducer } from "react";
import { ActionType, AppState } from "../types";

const initialState: AppState = {
  contacts: [
    {
      id: "1",
      email: "abc@gmail.com",
      phone_number: "987654321",
      name: "Pappu",
    },
    {
      id: "2",
      email: "eghjeg@gmail.com",
      phone_number: "123456678",
      name: "bunny mechanic",
    },
  ],
};
const reducer: Reducer<AppState, ActionType> = (initialState, action) => {
  switch (action.type) {
    case "Add_Contact": {
      return {
        ...initialState,
        contacts: [...initialState.contacts, action.payload],
      };
    }
    default: {
      return { ...initialState };
    }
  }
};
function useGlobalReducer() {
  return useReducer(reducer, initialState);
}

export default useGlobalReducer;
