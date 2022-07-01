import { useGLobalContext } from "../../../context/AppContext";
import Contact from "./Contact";
import ContactHeader from "./ContactHeader";

const Contacts = () => {
  const {
    state: { contacts },
    dispatch,
  } = useGLobalContext();
  return (
    <section className=" max-w-3xl mx-auto w-full md:w-full flex flex-col gap-y-3">
      <ContactHeader />
      {contacts.map(({ email, id, name, phone_number }, index) => {
        return (
          <Contact
            key={id}
            id={index + 1 + ""}
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
