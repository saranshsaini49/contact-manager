interface ContactType {
  id: string;
  list_number?: string;
  email: string;
  phone_number: string;
  name: string;
}
interface AppContextType {
  state: AppState;
  dispatch: React.Dispatch<ActionType>;
}
interface AppState {
  contacts: ContactType[];
  editFieldId: string;
}
interface AppReducerType {}
type ActionType =
  | {
      type: "Add_Contact";
      payload: ContactType;
    }
  | {
      type: "Delete_Contact";
      payload: string;
    }
  | {
      type: "Edit_Contact";
      payload: ContactType;
    }
  | {
      type: "Set_Edit_Field_Id";
      payload: string;
    };
export { ContactType, AppContextType, AppState, AppReducerType, ActionType };
