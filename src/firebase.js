// src/firebase.js

// Import the Firebase SDK functions
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Import Firestore
import { getAnalytics } from "firebase/analytics";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0P1AYaY2KCDwGAIRvtELJu2UTohP833Y",
  authDomain: "ramchandras-group-tution.firebaseapp.com",
  projectId: "ramchandras-group-tution",
  storageBucket: "ramchandras-group-tution.firebasestorage.app",
  messagingSenderId: "231736731711",
  appId: "1:231736731711:web:96dd1c9f4666323017f08a",
  measurementId: "G-RK785VFY3P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Initialize Firestore
const db = getFirestore(app); //  Firestore is now initialized

// Initialize Analytics
const analytics = getAnalytics(app);

// Export Firebase instances
export { auth, provider, signInWithPopup, signOut, db }; 
