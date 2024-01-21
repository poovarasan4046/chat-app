
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDeQwKfvbwN8da92XsTdSdDkcBfZvOjrds",
  authDomain: "realtime-chat-app-6644.firebaseapp.com",
  projectId: "realtime-chat-app-6644",
  storageBucket: "realtime-chat-app-6644.appspot.com",
  messagingSenderId: "562776059957",
  appId: "1:562776059957:web:c9a4d72241a1bda6f2017c",
  measurementId: "G-ZR7RNX53HT"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
//export const auth_state = onAuthStateChanged();
 