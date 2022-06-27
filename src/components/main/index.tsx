import React from "react";
import Contacts from "./contacts";
import Form from "./Form";

const Main = () => {
  return (
    <main className="flex flex-col gap-y-4 mt-8">
      <Form />
      <Contacts />
    </main>
  );
};

export default Main;
