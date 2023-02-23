import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyAxFmDc8qfPNIkuTDoJY9vZ5XiUF6sLFXo",
  authDomain: "e-library-90910.firebaseapp.com",
  projectId: "e-library-90910",
  storageBucket: "e-library-90910.appspot.com",
  messagingSenderId: "173622383305",
  appId: "1:173622383305:web:914f46b5002468754a3318"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
