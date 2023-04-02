// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCtcFBzItcveG7J45tbLlE9QJR0hwDlv6g",
    authDomain: "twitter-db1fb.firebaseapp.com",
    projectId: "twitter-db1fb",
    storageBucket: "twitter-db1fb.appspot.com",
    messagingSenderId: "615321636248",
    appId: "1:615321636248:web:a6b515bcc6a11bb7dfefed",
    measurementId: "G-367GYH77W2"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  
  export default db;