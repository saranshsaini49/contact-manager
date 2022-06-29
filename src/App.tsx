import React from "react";
import Header from "./components/Header";
import Main from "./components/main";
import AppWrapper from "./context/AppContext";

const App = () => {
  return (
    <>
      <AppWrapper>
        <Header />
        <Main />
      </AppWrapper>
    </>
  );
};

export default App;
