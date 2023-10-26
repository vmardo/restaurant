// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyC4kIo2di7VzKgXswbl_ivQWokZjlaNVaE",
  authDomain: "restaurant-c9-c66c5.firebaseapp.com",
  projectId: "restaurant-c9-c66c5",
  storageBucket: "restaurant-c9-c66c5.appspot.com",
  messagingSenderId: "697234898605",
  appId: "1:697234898605:web:5ea156b83515fc9988d024"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

//obtener una instancia de la FIRESTORE
const db = getFirestore(app);

export {db};
