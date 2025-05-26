import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBmHmJNrwqzDA6T4NDqUkOcu5v8uNGIxAM",
  authDomain: "gabrodev-faa65.firebaseapp.com",
  projectId: "gabrodev-faa65",
  storageBucket: "gabrodev-faa65.firebasestorage.app",
  messagingSenderId: "48458377205",
  appId: "1:48458377205:web:b143efbc7b4852d60c62bc",
  measurementId: "G-T6F4664ML4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);