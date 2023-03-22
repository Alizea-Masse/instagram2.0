// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9MKFqxmzH0r4W57OWEWSGPlnVgSPxKDg",
  authDomain: "insta-portfolio.firebaseapp.com",
  projectId: "insta-portfolio",
  storageBucket: "insta-portfolio.appspot.com",
  messagingSenderId: "808715026115",
  appId: "1:808715026115:web:521a3d603b5e1d118c6c76"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore();
const storage = getStorage();

export {app, db, storage};