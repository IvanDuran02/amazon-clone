import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDq4YEGoAuOBslJWGwXZdE2IPMwpYrazMI",
  authDomain: "clone-ad283.firebaseapp.com",
  projectId: "clone-ad283",
  storageBucket: "clone-ad283.appspot.com",
  messagingSenderId: "848335310229",
  appId: "1:848335310229:web:1764bca63ee084759d7a9c",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, provider, auth };

