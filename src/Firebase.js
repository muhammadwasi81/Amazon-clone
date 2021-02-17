import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDbmYFTTE-vOnb4yK7-XiEZJjCNVPkeadw",
    authDomain: "clone-wasi.firebaseapp.com",
    projectId: "clone-wasi",
    storageBucket: "clone-wasi.appspot.com",
    messagingSenderId: "248449181086",
    appId: "1:248449181086:web:810efbef593fddfb89e28f",
    measurementId: "G-QQXJ16QQ4Y"
  };
  firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export {auth};