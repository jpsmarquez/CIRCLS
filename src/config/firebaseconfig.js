import * as firebase from 'firebase';
import "firebase/auth";
import "firebase/storage";

const Aplicacion =  {
  apiKey: "AIzaSyCsbfj95GHm2-zO-o8cN0W0ucnIvZu2eXs",
  authDomain: "hectormacciseyitani.firebaseapp.com",
  databaseURL: "https://hectormacciseyitani.firebaseio.com",
  projectId: "hectormacciseyitani",
  storageBucket: "hectormacciseyitani.appspot.com",
  messagingSenderId: "607060501460",
  appId: "1:607060501460:web:cf8e84e5c825c8c6966c41",
  measurementId: "G-4LC8TTN0CX"
  };
  // Initialize Firebase
  firebase.initializeApp(Aplicacion);
  firebase.analytics();
 const storage = firebase.storage();
  


export {Aplicacion, storage};




