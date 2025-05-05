// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiQ7ZevjZatISUTyDbRoXd695gfQGiksU",
  authDomain: "event-explorar.firebaseapp.com",
  projectId: "event-explorar",
  storageBucket: "event-explorar.firebasestorage.app",
  messagingSenderId: "182385174365",
  appId: "1:182385174365:web:4042c6786b06ed87156ab4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;