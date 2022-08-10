import React from "react";
let count = 6;

const notes = [
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
  ];

function AddNote(noteToAdd) {
    console.log("note")
    console.log(noteToAdd)
    notes.push({
        key: count,
        title: noteToAdd.title,
        content: noteToAdd.content
    })
    count++;
}

function DeleteNote(noteToDel) {
    // return {
    //     notes.filter((note) =>
    //     return (note.title !== noteToDel.title)
    // )};
}

export default notes;
export {AddNote};
export {DeleteNote};