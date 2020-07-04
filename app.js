// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCc-C3sHPt_yDu8lrzI9Ffh1SmifJotpzg",
    authDomain: "send-receive-5c5ea.firebaseapp.com",
    databaseURL: "https://send-receive-5c5ea.firebaseio.com",
    projectId: "send-receive-5c5ea",
    storageBucket: "send-receive-5c5ea.appspot.com",
    messagingSenderId: "923974746016",
    appId: "1:923974746016:web:06c466dedb1b16fb2deec5",
    measurementId: "G-ZFQZ0ZMQES"
    };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var storage    = firebase.storage();
var storageRef = storage.ref();
var spaceRef = storageRef.child('images/APCS.PNG');

storageRef.child('images/APCS.PNG').getDownloadURL().then(function(url) {
    var test = url;
    document.querySelector('img').src = test;

    }).catch(function(error) {
});
