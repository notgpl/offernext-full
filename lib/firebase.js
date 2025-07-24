import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCTO3RmUebwcSZQPocs-b5BJayvoDFedtw",
  authDomain: "offernext-89c6d.firebaseapp.com",
  projectId: "offernext-89c6d",
  storageBucket: "offernext-89c6d.firebasestorage.app",
  messagingSenderId: "703692955949",
  appId: "1:703692955949:web:c45c657c6ba0050227f3a4"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
