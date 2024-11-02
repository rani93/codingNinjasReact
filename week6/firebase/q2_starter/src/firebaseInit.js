// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAO8ZY3tIp4Eh87XU-_lz4bgTED-2cBmXI",
  authDomain: "coding-ninjas-project-assign-1.firebaseapp.com",
  projectId: "coding-ninjas-project-assign-1",
  storageBucket: "coding-ninjas-project-assign-1.appspot.com",
  messagingSenderId: "213326479487",
  appId: "1:213326479487:web:805c58a8bb5a3e42937f4a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);