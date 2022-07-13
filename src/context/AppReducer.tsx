import { Reducer, useReducer } from "react";
import { ActionType, AppState } from "../types";

const initialState: AppState = {
  contacts: [],
  editFieldId: "",
};
const reducer: Reducer<AppState, ActionType> = (initialState, action) => {
  switch (action.type) {
    case "Add_Contact": {
      return {
        ...initialState,
        contacts: [...initialState.contacts, action.payload],
      };
    }
    case "Delete_Contact": {
      return {
        ...initialState,
        contacts: initialState.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    }
    case "Set_Edit_Field_Id": {
      return { ...initialState, editFieldId: action.payload };
    }
    case "Edit_Contact": {
      return {
        ...initialState,
        contacts: initialState.contacts.map((contact) => {
          if (contact.id === initialState.editFieldId) {
            const { email, name, phone_number } = action.payload;
            return { ...contact, email, phone_number, name };
          } else {
            return { ...contact };
          }
        }),
        editFieldId: "",
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
