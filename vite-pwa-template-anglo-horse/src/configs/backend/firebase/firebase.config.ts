// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Initialize Firebase
const app = initializeApp({
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
});

export const fbStore = getFirestore(
  app,
  import.meta.env.VITE_ADMIN_FIRESTORE_ID,
);
export const fbAuth = getAuth(app);
export const fbStorage = getStorage(app);

fbAuth.tenantId = import.meta.env.VITE_tenantId;
