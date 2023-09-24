import React, { useState } from "react";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebase";

const Input = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  // if we want to use useeffect instead of autofocus both option you can choose it depends on situation
  // const titleInputRef = useRef(null);

  // useEffect(() => {
  //   // When isExpanded becomes true, focus on the title input
  //   if (isExpanded) {
  //     titleInputRef.current.focus();
  //   }
  // }, [isExpanded]);

  const handleSubmit = async (e) => {
    e.preventDefault(e);
    if (note.title === "") {
      alert("Please mention Title");
      return;
    } else {
      if (note.content === "") {
        alert("Please mention in Take a Note");
        return;
      }
    }
    await addDoc(collection(db, "my-task"), {
      title: note.title,
      content: note.content,
    });
    setNote({
      title: "",
      content: "",
    });
  };

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  // function handleSubmit(event) {
  //   onAdd(note);
  //   setNote({
  //     title: "",
  //     content: "",
  //   });
  //   event.preventDefault();
  // }

  const handleClick = () => {
    setIsExpanded(true);
  };

  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-8 md:py-16">
      <div className="container mx-auto px-4">
        <form className="bg-white shadow-lg rounded-lg max-w-md w-full p-4 mx-auto flex flex-col">
          {isExpanded && (
            <input
              // ref={titleInputRef}
              className="w-full border-2 border-gray-300 rounded-lg py-2 px-3 text-gray-800 mb-4"
              onChange={handleChange}
              name="title"
              value={note.title}
              placeholder="Title"
              autoFocus
            />
          )}

          <textarea
            onClick={handleClick}
            onChange={handleChange}
            className="w-full resize-none border-2 border-gray-300 rounded-lg py-2 px-3 text-gray-800 h-40 md:h-48 mb-4"
            name="content"
            value={note.content}
            placeholder="Take a note"
          />

          {isExpanded && (
            <div className="mt-2 ml-auto">
              <Zoom in={true}>
                <Fab
                  className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                  onClick={handleSubmit}
                >
                  <AddCircleOutlinedIcon />
                </Fab>
              </Zoom>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Input;
