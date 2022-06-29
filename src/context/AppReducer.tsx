import { Reducer, useReducer } from "react";
import { ActionType, AppState } from "../types";

const initialState: AppState = {};
const reducer: Reducer<AppState, ActionType> = (initialState, Action) => {
  return {};
};
function useGlobalReducer() {
  return useReducer(reducer, initialState);
}

export default useGlobalReducer;
