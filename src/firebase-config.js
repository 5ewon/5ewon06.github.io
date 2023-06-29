// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBThoSKb1pp-ymw_KHjJwCmMV9zbVS5u9s",
  authDomain: "totolist-7a524.firebaseapp.com",
  projectId: "totolist-7a524",
  storageBucket: "totolist-7a524.appspot.com",
  messagingSenderId: "207610611926",
  appId: "1:207610611926:web:6b1104c7ecfe0b62576177",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
