import firebase  from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBQYv2LJ7enJ67HS16JoSZJivGjIMaZlhI",
    authDomain: "facebook-messenger-clone-bb47d.firebaseapp.com",
    databaseURL: "https://facebook-messenger-clone-bb47d.firebaseio.com",
    projectId: "facebook-messenger-clone-bb47d",
    storageBucket: "facebook-messenger-clone-bb47d.appspot.com",
    messagingSenderId: "522439105843",
    appId: "1:522439105843:web:bcabf5d70b36ad3b0ab246",
    measurementId: "G-60HP1E2QQR"
  });

  const db = firebaseApp.firestore();

  export default db;