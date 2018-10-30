import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as firebase from 'firebase';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBfdtbTl3xOtArniWiQ4YM1zGIakaKWkuA",
    authDomain: "lasallistasapp.firebaseapp.com",
    databaseURL: "https://lasallistasapp.firebaseio.com",
    projectId: "lasallistasapp",
    storageBucket: "lasallistasapp.appspot.com",
    messagingSenderId: "156946123076"
  };
  firebase.initializeApp(config);

ReactDOM.render(<App  />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();