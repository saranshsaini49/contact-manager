import React from "react";

const ContactHeader = () => {
  return (
    <header className=" bg-gray-800">
      <ul className="grid grid-cols-5 px-5 py-2 font-bold text-sm text-white">
        <li>#</li>
        <li>Name</li>
        <li>Email</li>
        <li>Number</li>
        <li>Action</li>
      </ul>
    </header>
  );
};

export default ContactHeader;
