import React from "react";
import NoteAppBar from "./NoteAppBar";

const Note = () => {
  return (
    <div className="notes">
      <NoteAppBar />

      <div className="notes__form">
        <input
          type="text"
          placeholder="Un título inspiracional"
          className="notes__form-title"
          autoComplete="off"
        />

        <textarea
          placeholder="Qué sucedió hoy?"
          className="notes__form-textarea"
        ></textarea>

        <div className="notes__form-img">
          <img
            src="https://images.unsplash.com/photo-1608855417613-bfade15518a3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};

export default Note;
