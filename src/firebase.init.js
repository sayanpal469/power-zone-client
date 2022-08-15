// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADOtCYb64YjLx2BZQ4-SUMb7omogoHhM8",
  authDomain: "power-zone-4685e.firebaseapp.com",
  projectId: "power-zone-4685e",
  storageBucket: "power-zone-4685e.appspot.com",
  messagingSenderId: "753964393851",
  appId: "1:753964393851:web:487c880ad007ac455909de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;