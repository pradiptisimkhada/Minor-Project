import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC5Y7HIGhKz_5VOfUD-xgr1T-Nr3rb-2AY",
  authDomain: "minor-project-5435c.firebaseapp.com",
  databaseURL: "https://minor-project-5435c.firebaseio.com",
  projectId: "minor-project-5435c",
  storageBucket: "minor-project-5435c.appspot.com",
  messagingSenderId: "1037067280277",
  appId: "1:1037067280277:web:7f3ae4027159a14bc3209c",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
