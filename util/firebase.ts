import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCKA8lXOd6KXpY6XCZDemF4mAH3XrqvYBM",
  authDomain: "cleanbeautyconnect-81ea7.firebaseapp.com",
  projectId: "cleanbeautyconnect-81ea7",
  storageBucket: "cleanbeautyconnect-81ea7.appspot.com",
  messagingSenderId: "57260054864",
  appId: "1:57260054864:web:31f4c76790df3726763455"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();