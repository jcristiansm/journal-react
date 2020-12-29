import React from "react";

const NoteAppBar = () => {
  return (
    <div className="notes__appbar">
      <span>28 de agosto 2020</span>

      <div>
        <button className="btn">Imagen</button>
        <button className="btn">Guardar</button>
      </div>
    </div>
  );
};

export default NoteAppBar;
