// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-3b0fc.firebaseapp.com",
  projectId: "mern-estate-3b0fc",
  storageBucket: "mern-estate-3b0fc.appspot.com",
  messagingSenderId: "532816965389",
  appId: "1:532816965389:web:e63f1c7fbb6cde2a624a44",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
