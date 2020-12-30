import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDb6kGKGgR1tRTTS3dAaL_cdLUSFLcJItI",
  authDomain: "dreams-journal-react.firebaseapp.com",
  projectId: "dreams-journal-react",
  storageBucket: "dreams-journal-react.appspot.com",
  messagingSenderId: "810460258929",
  appId: "1:810460258929:web:c1e3c4ab40038c3a00b1d0",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
// AUTENTICACION CON GOOGLE
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
