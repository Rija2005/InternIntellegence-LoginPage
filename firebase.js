import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  onAuthStateChanged, 
  signOut, 
  sendEmailVerification, 
  GoogleAuthProvider, 
  signInWithPopup 
} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

import { 
  getFirestore, 
  collection, 
  addDoc, 
  getDocs, 
  getDoc, 
  doc, 
  setDoc, 
  updateDoc, 
  deleteDoc 
} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAZGLxXNKvr4EFilpXtNdyGzaE70cxOyvM",
  authDomain: "newform-a4165.firebaseapp.com",
  projectId: "newform-a4165",
  storageBucket: "newform-a4165.firebasestorage.app",
  messagingSenderId: "750142542007",
  appId: "1:750142542007:web:ea7feb43ddfef3d582bd32",
  measurementId: "G-8G2MLCF0XC"
};

  // Initialize Firebase

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
  const provider = new GoogleAuthProvider();
  
 
  export { 
    auth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    onAuthStateChanged, 
    signOut, 
    sendEmailVerification, 
    GoogleAuthProvider, 
    provider, 
    signInWithPopup, 
    getDoc, 
    getFirestore, 
    db, 
    collection, 
    addDoc, 
    getDocs, 
    doc, 
    setDoc, 
    updateDoc, 
    deleteDoc 
  };
