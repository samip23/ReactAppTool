import React, { useState } from "react";
import ForumNote from "./ForumNote";
import CreateArea from "./CreateArea";
import "./ForumApp.css";

function ForumApp() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="forum-app">

      <CreateArea onAdd={addNote} />
       
      {notes.map((noteItem, index) => {
        return (
            
          <ForumNote
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        
        );
      })}

    </div>
  );
}

export default ForumApp;
