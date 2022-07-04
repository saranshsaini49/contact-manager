import React from "react";

const ContactHeader = () => {
  return (
    <header className="flex items-baseline gap-x-5 bg-gray-800 px-4 py-2 font-bold text-sm text-white">
      <p>#</p>
      <ul className="grid grid-cols-3 flex-1 ">
        <li>Name</li>
        <li>Email</li>
        <li>Number</li>
      </ul>
      <p className="pr-3">Action</p>
    </header>
  );
};

export default ContactHeader;
