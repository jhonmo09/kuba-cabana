// src/firebaseConfig.js
import firebase from "firebase/app";
import "firebase/database";
import "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyDmmJK_40f99DXmS81riu27ClEzkXs2nTk",
    authDomain: "squeezzed-fa161.firebaseapp.com",
    databaseURL: "https://squeezzed-fa161-default-rtdb.firebaseio.com",
    projectId: "squeezzed-fa161",
    storageBucket: "squeezzed-fa161.appspot.com",
    messagingSenderId: "932996044421",
    appId: "1:932996044421:web:63fd1294938854091dbbec",
    measurementId: "G-YC063MKW6F"
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