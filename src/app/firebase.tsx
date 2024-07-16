// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAy1cR0wd3E6WXYx0UmQ58hMXnPP4DG9s0",
  authDomain: "chidinma-carefinder.firebaseapp.com",
  projectId: "chidinma-carefinder",
  storageBucket: "chidinma-carefinder.appspot.com",
  messagingSenderId: "942436299437",
  appId: "1:942436299437:web:880ab288c38e44188d0c24"
};

// Initialize Firebase
const app = getApps().length ? getApp : initializeApp(firebaseConfig);
const auth= getAuth();

export { app, auth };