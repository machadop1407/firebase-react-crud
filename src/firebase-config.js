import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBG_9s2JJDUeBLtMenyPtIBsVLupa8vRB8",
  authDomain: "fir-tutorial-ad573.firebaseapp.com",
  projectId: "fir-tutorial-ad573",
  storageBucket: "fir-tutorial-ad573.appspot.com",
  messagingSenderId: "459866772432",
  appId: "1:459866772432:web:b029523d67a8c9f1981fd5",
  measurementId: "G-2R62T7YE0E",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
