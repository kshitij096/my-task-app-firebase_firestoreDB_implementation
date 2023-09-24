import React from "react";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Note = ({ noteItem, onDelete }) => {
  function handleClick() {
    onDelete(noteItem.id);
  }

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 my-6 max-w-xs md:max-w-md mx-auto">
      <div className="text-gray-800 flex flex-col md:flex-row md:items-center justify-between">
        <div className="">
          <h1 className="w-full font-bold text-xl  border-gray-300 rounded-lg py-2 px-3 text-gray-800 mb-4">
            {noteItem.title}
          </h1>
          <p className="w-full  border-gray-300 rounded-lg py-2 px-3 text-gray-800 mb-4">
            {noteItem.content}
          </p>
        </div>

        <button
          className="bg-red-500 sm:0 text-white py-1 px-2 rounded-md mt-3 md:mt-0 hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300"
          onClick={handleClick}
        >
          <DeleteOutlinedIcon />
        </button>
      </div>
    </div>
  );
};

export default Note;
