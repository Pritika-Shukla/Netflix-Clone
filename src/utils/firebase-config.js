import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getAnalytics } from "firebase/analytics"; 
const firebaseConfig = {
  apiKey: "AIzaSyADjMyPinNuleFmHaygqUIPp6V5wQZIP-I",
  authDomain: "react-netflix-clone-bf5ae.firebaseapp.com",
  projectId: "react-netflix-clone-bf5ae",
  storageBucket: "react-netflix-clone-bf5ae.appspot.com",
  messagingSenderId: "1097790547875",
  appId: "1:1097790547875:web:012cae8dc8bbb8630b9c16",
  measurementId: "G-JN8B2Q5JEC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firebaseAuth=getAuth(app);