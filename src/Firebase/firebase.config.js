// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrqBLWRo-TAy41sEKFlhhdum9pk9Hk3fk",
  authDomain: "dragon-news-auth-d68fc.firebaseapp.com",
  projectId: "dragon-news-auth-d68fc",
  storageBucket: "dragon-news-auth-d68fc.appspot.com",
  messagingSenderId: "657518816623",
  appId: "1:657518816623:web:852c5412e3f5b14427cc9a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;