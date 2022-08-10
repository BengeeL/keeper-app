import React, {useState} from "react";
import Header from "./Header";
import CreateArea from "./CreateArea";
// import notes from "../notes"
import Note from "./Note";
import Footer from "./Footer";

export default function App() {
    let count = 6;

    const [notes, setNotes] = useState([
        {
          key: 1,
          title: "Delegation",
          content:
            "Q. How many programmers does it take to change a light bulb? A. None – It’s a hardware problem"
        },
        {
          key: 2,
          title: "Loops",
          content:
            "How to keep a programmer in the shower forever. Show him the shampoo bottle instructions: Lather. Rinse. Repeat."
        },
        {
          key: 3,
          title: "Arrays",
          content:
            "Q. Why did the programmer quit his job? A. Because he didn't get arrays."
        },
        {
          key: 4,
          title: "Hardware vs. Software",
          content:
            "What's the difference between hardware and software? You can hit your hardware with a hammer, but you can only curse at your software."
        },
        {
            key: 5,
            title: "Hardware vs. Software",
            content:
              "What's the difference between hardware and software? You can hit your hardware with a hammer, but you can only curse at your software."
          }
      ]);

    return (
        <div>
            <Header />
            <CreateArea />
            {notes.map((note) => (
                <Note key={note.key} title={note.title} content={note.content}/>
            ))}
            <Footer />
        </div>
    );
}

function AddNote(noteToAdd) {
    const note = {
        key: count,
        ...noteToAdd
    }

    setNotes((prevNotes) => {
        return {
            ...prevNotes,
            note
        }}
    )

    count ++    
}

function DeleteNote(noteToDel) {
    setNotes((prevNotes) => {
        return (prevNotes.filter((note) => {
            return note !== noteToDel.key
        }));
    });
};  

export {AddNote};
export {DeleteNote};  