// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmhAM4WVY9I_KkCXmWRHKOHiR1z4zAJHM",
  authDomain: "passbook-5f622.firebaseapp.com",
  projectId: "passbook-5f622",
  storageBucket: "passbook-5f622.appspot.com",
  messagingSenderId: "988007522185",
  appId: "1:988007522185:web:74ed82f13b55de4d4dcb58",
  measurementId: "G-YBMEW90GRT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);
export {app , auth, db, firebaseConfig};