import {initializeApp} from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDA5lQCU0JsOHk6k9CtmGqehiL8lxkAI7Q",
  authDomain: "survive-411b0.firebaseapp.com",
  projectId: "survive-411b0",
  storageBucket: "survive-411b0.appspot.com",
  messagingSenderId: "50467829723",
  appId: "1:50467829723:web:9a4b69ebcf0649f83059fe",
  measurementId: "G-LNVG9SRN6F"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth=getAuth();

export {db,auth};