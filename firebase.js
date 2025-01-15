import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword , onAuthStateChanged , signOut ,sendEmailVerification , GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { getFirestore , collection, addDoc , getDocs , getDoc , doc, setDoc,updateDoc , deleteDoc }  from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCwlOSOXZzYdWnesIEv9ka5k9I6VYtUzvQ",
    authDomain: "login-page-62b88.firebaseapp.com",
    projectId: "login-page-62b88",
    storageBucket: "login-page-62b88.firebasestorage.app",
    messagingSenderId: "370976180272",
    appId: "1:370976180272:web:2c396773dd53952adf45f5",
    measurementId: "G-CJSFMXM9H3"
  };


  // Initialize Firebase

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
  const provider = new GoogleAuthProvider();
 
  export {auth, createUserWithEmailAndPassword , signInWithEmailAndPassword , onAuthStateChanged , signOut ,sendEmailVerification , GoogleAuthProvider, provider, signInWithPopup , getDoc, getFirestore , db , collection, addDoc , getDocs , doc, setDoc , updateDoc , deleteDoc}
