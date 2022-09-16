import firebase from "firebase/app"; //import core firebase
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIJS5y-RcXrN5nn8fL-7CFmNYMXcGq7Co",
  authDomain: "cooking-recipe-react-ac1a8.firebaseapp.com",
  projectId: "cooking-recipe-react-ac1a8",
  storageBucket: "cooking-recipe-react-ac1a8.appspot.com",
  messagingSenderId: "645843379459",
  appId: "1:645843379459:web:3e10d845e9e2e011457536",
  measurementId: "G-0P4XC0R4LH",
};

//init firebase
firebase.initializeApp(firebaseConfig); //connects backend firebase

//init services
const projectFirestore = firebase.firestore();

export { projectFirestore };
