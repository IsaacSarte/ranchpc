import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAwAlM5yZNV0vNYWhKYfOi24x0gXTtPwFQ",
    authDomain: "ranchpc-730e4.firebaseapp.com",
    projectId: "ranchpc-730e4",
    storageBucket: "ranchpc-730e4.appspot.com",
    messagingSenderId: "234194343684",
    appId: "1:234194343684:web:9710b7c658960e6dff6251"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();

export {auth};