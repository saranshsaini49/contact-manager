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
    <article className="border-b-2 pb-1">
      <ul className="grid grid-cols-5 px-2 py-1 items-baseline">
        <li>{list_number}</li>
        <li>{name}</li>
        <li>{email}</li>
        <li>{phone_number}</li>
        <li className="flex gap-1 ">
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
        </li>
      </ul>
    </article>
  );
};

export default Contact;
