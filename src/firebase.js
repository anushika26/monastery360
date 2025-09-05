// src/firebase.js
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  serverTimestamp,
  addDoc,
  collection,
  getDocs,
  query,
  where
} from "firebase/firestore";

// ✅ Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyB--bx_n-flwk7Uq1YbGLsEUk6hT5P5naw",
  authDomain: "monastery360-51534.firebaseapp.com",
  projectId: "monastery360-51534",
  storageBucket: "monastery360-51534.firebasestorage.app",
  messagingSenderId: "244749410002",
  appId: "1:244749410002:web:6a14a1a114f233db28170b",
  measurementId: "G-MZT5S43CL9"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ✅ Helper to fetch tours
export async function getPublishedTours() {
  const q = query(collection(db, "tours"), where("published", "==", true));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
}

// ✅ Helper to submit leads
export async function submitLead({ email, name, message, tourId }) {
  return await addDoc(collection(db, "leads"), {
    email,
    name,
    message,
    tourId,
    createdAt: serverTimestamp()
  });
}