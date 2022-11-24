import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';
import { getStorage } from '@firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDRkto1bOgY0mmUXYWB4pCWpvowwz8CcIU",
    authDomain: "todo-list-3c9a4.firebaseapp.com",
    projectId: "todo-list-3c9a4",
    storageBucket: "todo-list-3c9a4.appspot.com",
    messagingSenderId: "436719696527",
    appId: "1:436719696527:web:1fa088fccb30d8ac554efa"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);