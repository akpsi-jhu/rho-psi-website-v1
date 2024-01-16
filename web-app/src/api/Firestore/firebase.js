// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database"; // Import for Realtime Database

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnjQax5JjcEOSs7T_Yv8yGYxiwNWCJmkk",
  authDomain: "akpsi-rho-psi.firebaseapp.com",
  projectId: "akpsi-rho-psi",
  storageBucket: "akpsi-rho-psi.appspot.com",
  messagingSenderId: "137254000700",
  appId: "1:137254000700:web:0465286e83d28e0a1c4b39",
  measurementId: "G-4KMYM21JQT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// export reference to storage
export const storage = getStorage(app);

// export reference to the Realtime Database
export const db = getDatabase(app);
