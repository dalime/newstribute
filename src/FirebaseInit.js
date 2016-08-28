import firebase from 'firebase';

var config = {
    apiKey: process.env.API_KEY,
    authDomain: "tamil-nadu-seoul.firebaseapp.com",
    databaseURL: "https://tamil-nadu-seoul.firebaseio.com",
    storageBucket: "tamil-nadu-seoul.appspot.com",
  };

firebase.initializeApp(config);
