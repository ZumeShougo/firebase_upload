import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAiewruuxtBx22yexG7sUoWePeFcsnFQCk",
  authDomain: "fir-upload-fb3f0.firebaseapp.com",
  projectId: "fir-upload-fb3f0",
  storageBucket: "fir-upload-fb3f0.appspot.com",
  messagingSenderId: "327982306623",
  appId: "1:327982306623:web:987bfdb799ab5465a5ef8a"
};



export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);