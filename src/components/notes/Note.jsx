import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { activeNote, startDeleting } from "../../redux/notes/notes-actions";
import NoteAppBar from "./NoteAppBar";

const Note = () => {
  const dispatch = useDispatch();
  const { active: note } = useSelector((state) => state.notes);
  const [formValues, handleInputChange, reset] = useForm(note);
  const { body, title, id } = formValues;
  const activeId = useRef(note.id);

  useEffect(() => {
    if (note.id !== activeId.current) {
      reset(note);
      activeId.current = note.id;
    }
  }, [note, reset]);

  useEffect(() => {
    dispatch(activeNote(formValues.id, { ...formValues }));
  }, [formValues, dispatch]);

  const handleDelete = () => {
    dispatch(startDeleting(id));
  };

  return (
    <div className="notes">
      <NoteAppBar />

      <div className="notes__form">
        <input
          type="text"
          placeholder="Un título inspiracional"
          className="notes__form-title"
          autoComplete="off"
          name="title"
          value={title}
          onChange={handleInputChange}
        />

        <textarea
          placeholder="Qué sucedió hoy?"
          className="notes__form-textarea"
          name="body"
          value={body}
          onChange={handleInputChange}
        ></textarea>

        {note.url && (
          <div className="notes__form-img">
            <img src={note.url} alt="img" />
          </div>
        )}
      </div>

      <button className="btn btn-danger" onClick={handleDelete}>
        Borrar
      </button>
    </div>
  );
};

export default Note;
