import React, { FC } from "react";
import { useGLobalContext } from "../../../context/AppContext";
import { ContactType } from "../../../types";

const Contact: FC<ContactType> = ({
  email,
  id,
  name,
  phone_number,
  list_number,
}) => {
  const { dispatch } = useGLobalContext();
  return (
    <article className="flex p-4 pt-1 gap-x-4 border-b-2 md:items-center md:text-lg">
      <p>{list_number}.</p>
      <div className="flex flex-col gap-y-1.5 md:grid md:flex-1 md:grid-cols-3 ">
        <p>{name}</p>
        <p>{email}</p>
        <p>{phone_number}</p>
      </div>
      <div className="flex flex-col gap-1 ml-auto justify-evenly md:text-base">
        <button
          className="bg-blue-600 rounded-sm text-white px-2 py-0.5"
          onClick={() => {
            dispatch({ type: "Set_Edit_Field_Id", payload: id });
          }}
        >
          Edit
        </button>
        <button
          className="bg-red-600 rounded-sm text-white px-2 py-0.5"
          onClick={() => {
            dispatch({ type: "Delete_Contact", payload: id });
          }}
        >
          Delete
        </button>
      </div>
    </article>
  );
};

export default Contact;
