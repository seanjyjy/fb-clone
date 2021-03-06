import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAvscvOkkiEoWVmJYjFqlysLXpZLDP30m0",
  authDomain: "facebook-clone-738e0.firebaseapp.com",
  projectId: "facebook-clone-738e0",
  storageBucket: "facebook-clone-738e0.appspot.com",
  messagingSenderId: "105357081620",
  appId: "1:105357081620:web:6863260f75b025fd187b01",
  measurementId: "G-55XFYW0MH5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const dataBase = firebaseApp.firestore();
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export { auth, googleProvider };
export default dataBase;
