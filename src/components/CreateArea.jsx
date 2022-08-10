import React, { useState } from "react";
import {AddNote} from "../notes";

function CreateArea() {
    const [newNote, setNewNote] = useState({
        title: "",
        content: ""
    })

    function handleChange(event) {
        const inputField = event.target.name;
        const inputFieldValue = event.target.value;
        setNewNote((preValues) => {
            return ({
                ...preValues,
                [inputField]: inputFieldValue
            })
        })
    }

  return (
    <div>
      <form>
        <input name="title" placeholder="Title" onChange={handleChange} value={newNote.title}/>
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={handleChange} value={newNote.content}/>
        <button onClick={() => {
            a
        }}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
