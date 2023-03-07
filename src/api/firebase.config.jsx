import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDX2KaUEM2Rk8JO1zZ7PVJHTBSK_NrG-GE",
  authDomain: "storage-53d45.firebaseapp.com",
  projectId: "storage-53d45",
  storageBucket: "storage-53d45.appspot.com",
  messagingSenderId: "302581542612",
  appId: "1:302581542612:web:25de2b25536adc58c9d541"
};
const app = firebase.initializeApp(firebaseConfig);
export const db = app.firestore();

// ------------------------ MI BASE DE DATOS --------------------------------------
  // apiKey: "AIzaSyDX2KaUEM2Rk8JO1zZ7PVJHTBSK_NrG-GE",
  // authDomain: "storage-53d45.firebaseapp.com",
  // projectId: "storage-53d45",
  // storageBucket: "storage-53d45.appspot.com",
  // messagingSenderId: "302581542612",
  // appId: "1:302581542612:web:25de2b25536adc58c9d541"

