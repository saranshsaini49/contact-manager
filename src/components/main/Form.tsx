import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useGLobalContext } from "../../context/AppContext";

const Form = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    phone_number: "",
  });
  const { dispatch } = useGLobalContext();

  const changeInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };
  function ValidateEmail(mail: string) {
    if (
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail.toLowerCase())
    ) {
      return true;
    }
    alert("You have entered an invalid email address!");
    return false;
  }

  return (
    <form
      className=" p-5  flex flex-col gap-y-4 items-center"
      onSubmit={(e) => {
        e.preventDefault();
        if (
          inputs.name.length >= 3 &&
          inputs.phone_number.length >= 10 &&
          ValidateEmail(inputs.email)
        ) {
          dispatch({
            type: "Add_Contact",
            payload: {
              id: uuidv4(),
              email: inputs.email,
              name: inputs.name,
              phone_number: inputs.phone_number,
            },
          });
        } else {
          console.log(inputs.name.length);
          console.log(inputs.phone_number.length);
          console.log(ValidateEmail(inputs.email));
        }
      }}
    >
      <div className=" flex gap-y-3 flex-col items-center md:flex-row md:gap-x-4 w-full justify-center">
        <input
          className="rounded-md outline-none border border-gray-800 text-base px-2 md:px-3 md:py-1 max-w-sm w-full  hover:border-green-600"
          type="text"
          placeholder="Name"
          value={inputs.name}
          name="name"
          onChange={changeInputs}
        />
        <input
          className="rounded-md outline-none border border-gray-800 text-base px-2 md:px-3 md:py-1 max-w-sm w-full hover:border-green-600"
          type="email"
          placeholder="Email"
          name="email"
          value={inputs.email}
          onChange={changeInputs}
        />
        <input
          className="rounded-md outline-none border border-gray-800 text-base px-2 md:px-3 md:py-1 max-w-sm w-full  hover:border-green-600"
          type="number"
          placeholder="Mobile Number"
          name="phone_number"
          value={inputs.phone_number}
          onChange={changeInputs}
        />
      </div>
      <button
        className="text-sm px-4 py-1 bg-green-600 rounded-md text-white md:px-6 md:py-1.5 md:text-base  "
        type="submit"
      >
        Add Contact
      </button>
    </form>
  );
};

export default Form;
