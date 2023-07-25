import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDFXTkCSSWvFsemvHnXV-baNRuoOgN6Cz8",
    authDomain: "e-commerce-a45d2.firebaseapp.com",
    projectId: "e-commerce-a45d2",
    storageBucket: "e-commerce-a45d2.appspot.com",
    messagingSenderId: "616571416185",
    appId: "1:616571416185:web:df29a330d2cbc76dfc2ea8"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
