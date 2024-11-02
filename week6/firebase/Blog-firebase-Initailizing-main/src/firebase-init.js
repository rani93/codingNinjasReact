// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAbwCrcWrFccI_CACzH9cPu9ZzYq4n5UE",
  authDomain: "blogging-2254f.firebaseapp.com",
  projectId: "blogging-2254f",
  storageBucket: "blogging-2254f.appspot.com",
  messagingSenderId: "511121676540",
  appId: "1:511121676540:web:ceca73e31110527dd99f79"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);