import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDataNote, startUploading } from "../../redux/notes/notes-actions";

const NoteAppBar = () => {
  const dispatch = useDispatch();
  const { active } = useSelector((state) => state.notes);

  const handleSave = () => {
    dispatch(setDataNote(active));
  };

  const handlePicture = () => {
    document.querySelector("#fileSelector").click();
  };

  const handleFile = (e) => {
    const file = e.target.files[0];

    if (file) {
      dispatch(startUploading(file));
    }
  };

  return (
    <div className="notes__appbar">
      <span>28 de agosto 2020</span>

      <input
        id="fileSelector"
        type="file"
        style={{ display: "none" }}
        onChange={handleFile}
      />

      <div>
        <button className="btn" onClick={handlePicture}>
          Imagen
        </button>
        <button className="btn" onClick={handleSave}>
          Guardar
        </button>
      </div>
    </div>
  );
};

export default NoteAppBar;
