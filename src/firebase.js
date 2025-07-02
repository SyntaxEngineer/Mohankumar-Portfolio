// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBff3VwqzwBDokvSGebuGWwQj8KRAHylfQ",
    authDomain: "portfolio-bbaa6.firebaseapp.com",
    projectId: "portfolio-bbaa6",
    storageBucket: "portfolio-bbaa6.firebasestorage.app",
    messagingSenderId: "160192586610",
    appId: "1:160192586610:web:ebf40726f379b2f5fab3eb"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
