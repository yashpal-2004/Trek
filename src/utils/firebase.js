import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCUMJQXi7ucZtqTK9jSb0jXfU-ATzK0fHY",
  authDomain: "myfitnesshub-1a5ec.firebaseapp.com",
  projectId: "myfitnesshub-1a5ec",
  storageBucket: "myfitnesshub-1a5ec.firebasestorage.app",
  messagingSenderId: "1072111347302",
  appId: "1:1072111347302:web:17ded3b7fde2cfab202fa7",
  measurementId: "G-N9F4DES4GQ"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
