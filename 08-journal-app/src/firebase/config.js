// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmCNngF_EdZV7XGxFLuoPkDnDfUZogQZw",
  authDomain: "react-cursos-50f34.firebaseapp.com",
  projectId: "react-cursos-50f34",
  storageBucket: "react-cursos-50f34.appspot.com",
  messagingSenderId: "682170913445",
  appId: "1:682170913445:web:61582cdc6599bf6c94f34c",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
