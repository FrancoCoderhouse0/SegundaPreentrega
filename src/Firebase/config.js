import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAg3w-OHXoB5Fvbvo1ZI92w3jBOXhQ9gSI",
    authDomain: "e-commerce-8a80f.firebaseapp.com",
    projectId: "e-commerce-8a80f",
    storageBucket: "e-commerce-8a80f.appspot.com",
    messagingSenderId: "84323180958",
    appId: "1:84323180958:web:6f20eb28a3d89a4649768f"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
