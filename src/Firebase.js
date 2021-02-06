import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAA76Q2bcfh6SIfJqCvZ47bbrFER2SkDqk",
    authDomain: "clone-aaf54.firebaseapp.com",
    projectId: "clone-aaf54",
    storageBucket: "clone-aaf54.appspot.com",
    messagingSenderId: "722457398384",
    appId: "1:722457398384:web:dd32e05fc2fb5bc48cb8b5",
    measurementId: "G-92707NYNT1"
});

const auth = firebase.auth();

export {auth};