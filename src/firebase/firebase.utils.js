import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAb6aaYjgPsyOXqU3Cll-XgSFOX2wyJEv8",
  authDomain: "ecommerce-react-359e2.firebaseapp.com",
  databaseURL: "https://ecommerce-react-359e2.firebaseio.com",
  projectId: "ecommerce-react-359e2",
  storageBucket: "ecommerce-react-359e2.appspot.com",
  messagingSenderId: "503639622680",
  appId: "1:503639622680:web:9bfdfec1184a6d8f39af6d",
  measurementId: "G-0CSYT0RDYH"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
