// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKiDy97kAenm53Q-35qp5gykSVfcQLtDw",
  authDomain: "expense-tracker-7aecd.firebaseapp.com",
  projectId: "expense-tracker-7aecd",
  storageBucket: "expense-tracker-7aecd.appspot.com",
  messagingSenderId: "59950843842",
  appId: "1:59950843842:web:b96fc5271531228a95785b",
  measurementId: "G-S2VJDY43DN"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)