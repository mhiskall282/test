import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIUCHsYuUXmJX_RhactMjknXWoadARrwM",
  authDomain: "the-futurist-academy.firebaseapp.com",
  projectId: "the-futurist-academy",
  storageBucket: "the-futurist-academy.firebasestorage.app",
  messagingSenderId: "28656779683",
  appId: "1:28656779683:web:3ba6e1346ef8bde29e1a16",
  measurementId: "G-VB9MMKDRGN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Google Auth Provider
export const googleProvider = new GoogleAuthProvider();

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Initialize Analytics (optional)
export const analytics = getAnalytics(app);

export default app;
