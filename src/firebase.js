// ------------------- IMPORTS -------------------------
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAe31d5U_aToi9H3hl-dIemqlDQ0oRDe-8",
  authDomain: "flora-e3f38.firebaseapp.com",
  projectId: "flora-e3f38",
  storageBucket: "flora-e3f38.appspot.com",
  messagingSenderId: "736031743348",
  appId: "1:736031743348:web:96a89390a34fba8aa02021"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initializing Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initializing database connection and exporting for the use in other files
export const db = getFirestore(app);

// Initializing Firebase Storage
export const storage = getStorage(app)