// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDE3DpKp8ZQGBdw4lW3aB5tkpluUvaFV8s",
  authDomain: "netflix-clone-1bde3.firebaseapp.com",
  projectId: "netflix-clone-1bde3",
  storageBucket: "netflix-clone-1bde3.appspot.com",
  messagingSenderId: "249620981374",
  appId: "1:249620981374:web:f5bd6918a09d82c02ada2f",
  measurementId: "G-2F972VKY4N"
};


const app = initializeApp(firebaseConfig);

export const firebaseAuth =getAuth(app);