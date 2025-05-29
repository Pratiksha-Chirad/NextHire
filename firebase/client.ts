// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAzIBlQlYJA5fSukly7UFzn9pCpWRl1m-k",
  authDomain: "nexthire-dd6b5.firebaseapp.com",
  projectId: "nexthire-dd6b5",
  storageBucket: "nexthire-dd6b5.firebasestorage.app",
  messagingSenderId: "126801068104",
  appId: "1:126801068104:web:31df8e801d132723a0987d",
  measurementId: "G-02729KWR7K"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);