import firebase from "firebase/app"
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyCqYfN_0OU6_VH5VXp3FVn7KIcAicyz-_M",
    authDomain: "web-crud-3c181.firebaseapp.com",
    projectId: "web-crud-3c181",
    storageBucket: "web-crud-3c181.appspot.com",
    messagingSenderId: "792470442434",
    appId: "1:792470442434:web:0b34ae0b6c3e7dc902865b",
    measurementId: "G-YF0L9ZB07G"
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore()