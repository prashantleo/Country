import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig={

    apiKey: "AIzaSyDt602NqjEX0EgVJBIsRViZw02YVlv1-ro",
    authDomain: "assesment-61ef2.firebaseapp.com",
    projectId: "assesment-61ef2",
    storageBucket: "assesment-61ef2.appspot.com",
    messagingSenderId: "356767792384",
    appId: "1:356767792384:web:2a7008a0ffae89b0a787e5",
    measurementId: "G-567MN8L0SQ"
}
export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;