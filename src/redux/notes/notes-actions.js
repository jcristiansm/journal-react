import Swal from "sweetalert2";

import { db } from "../../firebase/firebase";
import { fileUpload } from "../../helpers/fileUpload";
import { loadNotes } from "../../helpers/load-notes";
import { notesTypes } from "./notesTypes";

export const startNewNote = () => {
  // getState -> SEGUNDA VARIABLE DE THUNK, EL NOMBRE PUEDE SER CUALQUIERA
  //             SIRVE PARA ACCEDER AL EDO Y SUS VALORES
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    const newNote = {
      title: "",
      body: "",
      date: new Date().getTime(),
    };

    const docRef = await db.collection(`${uid}/journal/notes`).add(newNote);

    dispatch(activeNote(docRef.id, newNote));
    dispatch(addNewNote(docRef.id, newNote));
  };
};

export const activeNote = (id, note) => ({
  type: notesTypes.SET_ACTIVE_NOTE,
  payload: {
    id,
    ...note,
  },
});

export const addNewNote = (id, note) => ({
  type: notesTypes.ADD_NEW_NOTE,
  payload: {
    id,
    ...note,
  },
});

export const startLoadingNotes = (uid) => {
  return async (dispatch) => {
    const notes = await loadNotes(uid);
    dispatch(setNotes(notes));
  };
};

export const setNotes = (notes) => ({
  type: notesTypes.LOAD_NOTE,
  payload: notes,
});

export const setDataNote = (note) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    if (!note.url) {
      delete note.url;
    }

    const noteToFirestore = { ...note };
    delete noteToFirestore.id;

    await db.doc(`${uid}/journal/notes/${note.id}`).update(noteToFirestore);

    dispatch(refreshNote(note.id, noteToFirestore));

    Swal.fire("Nota guardada", note.title, "success");
  };
};

export const refreshNote = (id, note) => ({
  type: notesTypes.UPDATE_NOTE,
  payload: {
    id,
    note: {
      id,
      ...note,
    },
  },
});

export const startUploading = (file) => {
  return async (dispatch, getState) => {
    const { active: activeNote } = getState().notes;

    Swal.fire({
      title: "Subiendo...",
      text: "Favor de esperar...",
      allowOutsideClick: false,
      onBeforeOpen: () => {
        Swal.showLoading();
      },
    });

    const fileUrl = await fileUpload(file);
    activeNote.url = fileUrl;
    dispatch(setDataNote(activeNote));

    Swal.close();
  };
};

export const startDeleting = (id) => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid;
    await db.doc(`${uid}/journal/notes/${id}`).delete();

    dispatch(deleteNote(id));
  };
};

export const deleteNote = (id) => ({
  type: notesTypes.DELETE_NOTE,
  payload: id,
});

export const noteLogout = () => ({
  type: notesTypes.LOGOUT_CLEAN_NOTE,
});
