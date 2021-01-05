import { uiTypes } from "./uiTypes";

const INITIAL_STATE = {
  loading: false,
  msgError: null,
};

const uiReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case uiTypes.SET_ERROR:
      return {
        ...state,
        msgError: action.payload,
      };

    case uiTypes.UNSET_ERROR:
      return {
        ...state,
        msgError: null,
      };

    case uiTypes.START_LOADING:
      return {
        ...state,
        loading: true,
      };

    case uiTypes.FINISH_LOADING:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default uiReducer;
