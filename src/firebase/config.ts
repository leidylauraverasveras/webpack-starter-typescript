import firebase from 'firebase/app';
import 'firebase/firestore';    

const firebaseConfig = {
    apiKey: "AIzaSyDdnnUoy076ZcQ2Auf4x0CP5zhgLb6AF44",
    authDomain: "sql-leidy.firebaseapp.com",
    projectId: "sql-leidy",
    storageBucket: "sql-leidy.appspot.com",
    messagingSenderId: "64480438207",
    appId: "1:64480438207:web:3d8530ad5d0c810af6e30a",
    measurementId: "G-JW6ELJM45P"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  console.log('firebase configurado')


  export default firebase.firestore();