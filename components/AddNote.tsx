import React from "react";

const AddNote = () => {
  return (
    <a
      className="inline-block rounded-full border border-red-600 bg-red-500 p-3 text-white hover:bg-transparent hover:text-red-600 focus:ring-3 focus:outline-hidden"
      href="/create-note"
    >
      <span className="sr-only"> Download </span>

      <svg
        width="50px"
        height="50px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <path
            d="M4 12H20M12 4V20"
            stroke="#ffffff"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>{" "}
        </g>
      </svg>
    </a>
  );
};

export default AddNote;
