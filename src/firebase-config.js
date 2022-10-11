import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC8Jr5FDic2RL8SDX6a764EgYzGzSl4hyc",
  authDomain: "pos-till.firebaseapp.com",
  projectId: "pos-till",
  storageBucket: "pos-till.appspot.com",
  messagingSenderId: "51426658279",
  appId: "1:51426658279:web:252ff54dfaa3d0c5895f42",
  measurementId: "G-VQ6G2TKPNG",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
