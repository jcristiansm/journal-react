import { notesTypes } from "./notesTypes";

const INITIAL_STATE = {
  notes: [],
  active: null,
};

const notesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case notesTypes.SET_ACTIVE_NOTE:
      return {
        ...state,
        active: {
          ...action.payload,
        },
      };

    case notesTypes.ADD_NEW_NOTE:
      return {
        ...state,
        notes: [action.payload, ...state.notes],
      };

    case notesTypes.LOAD_NOTE:
      return {
        ...state,
        notes: [...action.payload],
      };

    case notesTypes.UPDATE_NOTE:
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === action.payload.id ? action.payload.note : note
        ),
      };

    case notesTypes.DELETE_NOTE:
      return {
        ...state,
        active: null,
        notes: state.notes.filter((note) => note.id !== action.payload),
      };

    case notesTypes.LOGOUT_CLEAN_NOTE:
      return {
        ...state,
        active: null,
        notes: [],
      };

    default:
      return state;
  }
};

export default notesReducer;
