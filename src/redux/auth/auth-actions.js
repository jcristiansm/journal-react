import { authTypes } from "./authTypes";

export const login = (uid, displayName) => ({
  type: authTypes.LOGIN,
  payload: {
    uid,
    displayName,
  },
});
