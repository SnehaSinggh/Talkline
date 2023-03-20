import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBgq23TU5r6pL2lk6VseT6bknjmEBS7TaI",
  authDomain: "talkline-df364.firebaseapp.com",
  projectId: "talkline-df364",
  storageBucket: "talkline-df364.appspot.com",
  messagingSenderId: "167024805784",
  appId: "1:167024805784:web:9e2d23774bbf83f43b0ded"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const storage = getStorage();
export const db = getFirestore(app);

