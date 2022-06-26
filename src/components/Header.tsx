import React from "react";
import { FcBusinessContact } from "react-icons/fc";
const Header = () => {
  return (
    <header className="flex items-center p-2 bg-gray-800 text-lg font-bold italic text-white ">
      <span className="ml-4 text-4xl">
        <FcBusinessContact />
      </span>
      <h1 className="flex-1 text-center">Contact Manager App</h1>
    </header>
  );
};

export default Header;
