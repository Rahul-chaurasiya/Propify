// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDiZbKdtn6axVWPyYHUExXdgjzR3dTDQa8",
//   authDomain: "prop-ify.firebaseapp.com",
//   projectId: "prop-ify",
//   storageBucket: "prop-ify.appspot.com",
//   messagingSenderId: "214735108152",
//   appId: "1:214735108152:web:a92be5deca63861a9a4ecd"
// };


const firebaseConfig = {
  apiKey: "AIzaSyDVN2M5r0srdg5cN1LNb-6ge71DXDrNF8U",
  authDomain: "house-market-b8dcc.firebaseapp.com",
  projectId: "house-market-b8dcc",
  storageBucket: "house-market-b8dcc.appspot.com",
  messagingSenderId: "1012140940651",
  appId: "1:1012140940651:web:56cb2b7e34d8ef036a402e"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();