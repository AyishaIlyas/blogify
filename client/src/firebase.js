// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blogify-8d746.firebaseapp.com",
  projectId: "blogify-8d746",
  storageBucket: "blogify-8d746.appspot.com",
  messagingSenderId: "1055216080449",
  appId: "1:1055216080449:web:b314586977e288339098c0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);