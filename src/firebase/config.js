// src/firebase/config.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCAseAx5VTvRBmujnstefaYNzifigRrkEs",
  authDomain: "ecommerce-app-fd881.firebaseapp.com",
  projectId: "ecommerce-app-fd881",
  storageBucket: "ecommerce-app-fd881.firebasestorage.app",
  messagingSenderId: "937161485210",
  appId: "1:937161485210:web:fc35191c52d7d498f72823"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
