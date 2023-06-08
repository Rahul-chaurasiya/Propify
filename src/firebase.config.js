// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiZbKdtn6axVWPyYHUExXdgjzR3dTDQa8",
  authDomain: "prop-ify.firebaseapp.com",
  projectId: "prop-ify",
  storageBucket: "prop-ify.appspot.com",
  messagingSenderId: "214735108152",
  appId: "1:214735108152:web:a92be5deca63861a9a4ecd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();