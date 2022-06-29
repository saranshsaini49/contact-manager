interface ContactType {
  id: string;
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
type ActionType = { type: "Add_Contact"; payload: {} };
export { ContactType, AppContextType, AppState, AppReducerType, ActionType };
