import { useEffect, useState } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import Note from "./components/Note";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
} from "firebase/firestore";
import { db } from "./components/firebase";

function App() {
  const [notes, setNotes] = useState([]);

  // wwhatever is commented this is before using firebase
  // function addNote(newNote) {
  //   setNotes((prevNotes) => {
  //     return [...prevNotes, newNote];
  //   });
  // }

  // function deleteNote(id) {
  //   setNotes((prevNotes) => {
  //     return prevNotes.filter((noteItem, index) => {
  //       return index !== id;
  //     });
  //   });
  // }

  const deleteNote = async (id) => {
    await deleteDoc(doc(db, "my-task", id));
  };

  useEffect(() => {
    const q = query(collection(db, "my-task"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = [];
      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id });
      });
      setNotes(todosArr);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <Header />
      {/* onAdd={addNote} */}
      <Input />
      <div className="flex flex-col flex-wrap  md:flex-row justify-between">
        {notes.map((noteItem, index) => {
          return (
            <Note
              key={index}
              // id={index}
              noteItem={noteItem}
              // title={noteItem.title}
              // content={noteItem.content}
              onDelete={deleteNote}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
