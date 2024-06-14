import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import Constants from "expo-constants";
// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCmmqUvLq9-OmrSUKykpW-sbSuvSnuX1SI",
  authDomain: "chatttapp-4b6e4.firebaseapp.com",
  projectId: "chatttapp-4b6e4",
  storageBucket: "chatttapp-4b6e4.appspot.com",
  messagingSenderId: "483091656174",
  appId: "1:483091656174:web:03d915907403d96fcef2ff",
  measurementId: "G-PN3GVTZZ2T"
};
// initialize firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();
