// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGBBUYYf3wPE5wUVXS67QxtZXBlQw3Ztg",
  authDomain: "cafecord-660a6.firebaseapp.com",
  projectId: "cafecord-660a6",
  storageBucket: "cafecord-660a6.appspot.com",
  messagingSenderId: "774016383268",
  appId: "1:774016383268:web:ddcdae2d8b0b025c155bb1",
  measurementId: "G-0TK65HP520"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);