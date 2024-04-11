import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA1DTgkqRLG9OerqUPTvWwgSwXAAXp8GCg",
  authDomain: "crudnextjs-a9d38.firebaseapp.com",
  databaseURL:
    "https://crudnextjs-a9d38-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "crudnextjs-a9d38",
  storageBucket: "crudnextjs-a9d38.appspot.com",
  messagingSenderId: "772327692806",
  appId: "1:772327692806:web:208a4b96d498350c19c187",
  measurementId: "G-4N5P9JYTPV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const db = getFirestore(app);

export { database, db };
