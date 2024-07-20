// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4lFYbitTA5HC_49b3YR34W3cRhLtilyY",
  authDomain: "mern-book-inventory-151bc.firebaseapp.com",
  projectId: "mern-book-inventory-151bc",
  storageBucket: "mern-book-inventory-151bc.appspot.com",
  messagingSenderId: "38122871410",
  appId: "1:38122871410:web:9607e88a1c567c0636c0eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;