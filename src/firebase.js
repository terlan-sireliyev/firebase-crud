import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// import { getStorage } from "firebase/storage";
// import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDJauLtoInAJ7XduQhX6SK55YZrRz3xMyE",
  authDomain: "fb-crud-793d4.firebaseapp.com",
  projectId: "fb-crud-793d4",
  storageBucket: "fb-crud-793d4.appspot.com",
  messagingSenderId: "852512287093",
  appId: "1:852512287093:web:770d85237cc24ab5ea0b3c",
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
// export const imgDB = getStorage(app);
// export const TxtDB = getFirestore(app);
