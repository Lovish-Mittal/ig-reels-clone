// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from './firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCXixZyZRXV9kS7hiLnMqEOsEIM4zfSrCE",
    authDomain: "ig-reels-90673.firebaseapp.com",
    projectId: "ig-reels-90673",
    storageBucket: "ig-reels-90673.appspot.com",
    messagingSenderId: "208514643409",
    appId: "1:208514643409:web:74bcd6613193844c049cf0",
    measurementId: "G-GNC6PDPF37"
  };
  const firebaseApp =
  firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  export default db;