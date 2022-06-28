import React, { useState } from "react";
import { ContactType } from "../../../types";
import Contact from "./Contact";
import ContactHeader from "./ContactHeader";

const arr: ContactType[] = [
  { id: "1", email: "abc@gmail.com", phone_number: "987654321", name: "Pappu" },
  {
    id: "2",
    email: "eghjeg@gmail.com",
    phone_number: "123456678",
    name: "bunny mechanic",
  },
];
const Contacts = () => {
  const [contacts, setContacts] = useState(arr);
  return (
    <section className=" max-w-3xl mx-auto w-full md:w-full flex flex-col gap-y-3">
      <ContactHeader />
      {contacts.map(({ email, id, name, phone_number }) => {
        return (
          <Contact
            key={id}
            id={id}
            email={email}
            phone_number={phone_number}
            name={name}
          />
        );
      })}
    </section>
  );
};

export default Contacts;
