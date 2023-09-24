import React from "react";
import ChecklistTwoToneIcon from "@mui/icons-material/ChecklistTwoTone";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-4">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
          <ChecklistTwoToneIcon className="mx-2" />
          My Task
        </h1>
      </div>
    </header>
  );
};

export default Header;
