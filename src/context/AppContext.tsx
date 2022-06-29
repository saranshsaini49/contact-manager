import React, { createContext } from "react";
import { AppContextType } from "../types";
import useGlobalReducer from "./AppReducer";

const AppContext = createContext<AppContextType>(null!);

const AppWrapper = () => {
  const [state, dispatch] = useGlobalReducer();
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      AppContext
    </AppContext.Provider>
  );
};

export default AppWrapper;
