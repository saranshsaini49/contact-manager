import React, { createContext, FC, useContext } from "react";
import { AppContextType } from "../types";
import useGlobalReducer from "./AppReducer";

const AppContext = createContext<AppContextType>(null!);

const AppWrapper: FC<any> = ({ children }) => {
  const [state, dispatch] = useGlobalReducer();
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
function useGLobalContext() {
  return useContext(AppContext);
}
export { useGLobalContext };
export default AppWrapper;
