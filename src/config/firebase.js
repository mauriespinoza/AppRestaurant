// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyCW5o-OeGHvDsXHRk8_u22r3aVS41IdOcM",

  authDomain: "dbrestaurant-5587d.firebaseapp.com",

  projectId: "dbrestaurant-5587d",

  storageBucket: "dbrestaurant-5587d.appspot.com",

  messagingSenderId: "547617840032",

  appId: "1:547617840032:web:be4eb485648f0ba0f6a2c5"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);