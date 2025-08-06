// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDL3Z4yw_AgTGp9RPAPoeGaYEMfuuDG1_w",
  authDomain: "alzhan-league.firebaseapp.com",
  projectId: "alzhan-league",
  storageBucket: "alzhan-league.firebasestorage.app",
  messagingSenderId: "1020790215328",
  appId: "1:1020790215328:web:88d679c481fcf2c6eb2fc5",
  measurementId: "G-0P2YN5CWD7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);