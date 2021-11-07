// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import {getFirestore} from'firebase/firestore'; 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqimLnK8l3nS4EKjjm2oE5jG0kvOQjhVA",
  authDomain: "recipe-maker-system.firebaseapp.com",
  projectId: "recipe-maker-system",
  storageBucket: "recipe-maker-system.appspot.com",
  messagingSenderId: "20370346274",
  appId: "1:20370346274:web:1ab42a4d4d4cfe75cc957b",
  measurementId: "G-P2SWYKJT8L"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 
const db = getFirestore(app)
export { db } 





