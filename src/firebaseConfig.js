// src/firebaseConfig.js
import firebase from "firebase/app";
import "firebase/database";
import "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBH3jZpEIMl3uUDEhZB2rXnBA4tlbRjfRE",
  authDomain: "squeezzed-kuba-cabana.firebaseapp.com",
  databaseURL: "https://squeezzed-kuba-cabana-default-rtdb.firebaseio.com",
  projectId: "squeezzed-kuba-cabana",
  storageBucket: "squeezzed-kuba-cabana.appspot.com",
  messagingSenderId: "357411752809",
  appId: "1:357411752809:web:0217de8463083839218bf8",
  measurementId: "G-WRGNLDGWH5",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const database = firebase.database();

function getAnalytics() {
  if (typeof window !== "undefined") {
    return firebase.analytics();
  }
  return null;
}

export { firebase, getAnalytics, database };
