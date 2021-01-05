import { uiTypes } from "./uiTypes";

export const setError = (err) => ({
  type: uiTypes.SET_ERROR,
  payload: err,
});

export const unsetError = () => ({
  type: uiTypes.UNSET_ERROR,
});

export const startLoading = () => ({
  type: uiTypes.START_LOADING,
});

export const finishLoading = () => ({
  type: uiTypes.FINISH_LOADING,
});
