import { firebase, googleAuthProvider } from "../../firebase/firebase";
import { authTypes } from "./authTypes";

export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {};
};

export const startGoogleLogin = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
      });
  };
};

export const login = (uid, displayName) => ({
  type: authTypes.LOGIN,
  payload: {
    uid,
    displayName,
  },
});
