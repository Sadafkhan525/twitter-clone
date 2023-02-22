// import firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBNtnBWnRF0QSULonTjiEwsXPQyhRBvqXc",
    authDomain: "twitter-clone-4ae9f.firebaseapp.com",
    projectId: "twitter-clone-4ae9f",
    storageBucket: "twitter-clone-4ae9f.appspot.com",
    messagingSenderId: "677633738936",
    appId: "1:677633738936:web:74ef662a2bc6d46c650c4d",
    measurementId: "G-CWKEGW2B9J"
};

const firebaseApp = firebase.initializeApp
(firebaseConfig)

const db = firebaseApp.firestore()

export default db;
