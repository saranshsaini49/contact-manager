import React from "react";

const Form = () => {
  return (
    <form className=" p-5  flex flex-col gap-y-4 items-center">
      <div className=" flex gap-y-3 flex-col items-center md:flex-row md:gap-x-4 w-full justify-center">
        <input
          className="rounded-md outline-none border border-gray-800 text-base px-2 md:px-3 md:py-1 max-w-sm w-full  hover:border-green-600"
          type="text"
          placeholder="Name"
        />
        <input
          className="rounded-md outline-none border border-gray-800 text-base px-2 md:px-3 md:py-1 max-w-sm w-full hover:border-green-600"
          type="email"
          placeholder="Email"
        />
        <input
          className="rounded-md outline-none border border-gray-800 text-base px-2 md:px-3 md:py-1 max-w-sm w-full  hover:border-green-600"
          type="number"
          placeholder="Mobile Number"
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
