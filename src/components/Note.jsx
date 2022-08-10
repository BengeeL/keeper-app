import React from "react";
import { DeleteNote } from "./App";

export default function Note (note) {
    return (
        <div className="note">
            <h1>{note.title}</h1>
            <p>{note.content}</p>
            <button onClick={() => {
                DeleteNote(note)
            }}>DELETE</button>
        </div>
    );
}
