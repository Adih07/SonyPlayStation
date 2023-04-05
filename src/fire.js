import firebase from "firebase/compat/app";

import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBnQE0LGE1CtOKRJ-9G_UKUZuizWyqy_9U",
  authDomain: "sony.firebaseapp.com",
  projectId: "sony",
  storageBucket: "sony.appspot.com",
  messagingSenderId: "180635183827",
  appId: "1:180635183827:web:bfe4c19414d2f518b18226",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
