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
}
interface AppReducerType {}
type ActionType =
  | {
      type: "Add_Contact";
      payload: {
        id: string;
        name: string;
        email: string;
        phone_number: string;
      };
    }
  | {
      type: "Delete_Contact";
      payload: string;
    };
export { ContactType, AppContextType, AppState, AppReducerType, ActionType };
