// Your web app's Firebase configuration

// If you migrate this program to a new Firebase, you will need to 
// copy the new credentials from the account you are using. 
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

 // reference to storage center
 var storage = firebase.storage();
 var storageRef = storage.ref();

 // reference to database and table we want to access
 var databaseRef = firebase.database().ref('imageURLs/2'); 

 // retreives the image reference from the DB and then adds the image to
 // the webpage by finding the image in Storage and displaying it with a link
function retreive() {

    // reads the value of the first child and saves it's data to newData
    databaseRef.on("value", function(snapshot) {
        var newData = snapshot.val();
        console.log("image URL: " + newData.imageName);
        // URL from child is sent to add image to create a new img tag in the DOM
        addImage(newData.imageName); 
        console.log("image added"); 
    });
} // retreive

// adds new image using the imageName retreived from the DB to access the URL from the storage
function addImage(imageName) {
    // removes current image
    removeElement("image"); 

    // dynamically adds new image from FB storage using reference in FB Database
    storageRef.child('images/' + imageName).getDownloadURL().then(function(url) {
        var img = document.createElement('img');
        img.id = "image";  
        img.src = url;
        // adds image to page 
        document.body.appendChild(img); 

        }).catch(function(error) {
    });
} // addImage

// removes the image so the new one can be displayed alone
function removeElement(elementId) {
    // current element
    var element = document.getElementById(elementId);

    // if the element exists
    if (element) {
        // Removes an element from the document
        element.parentNode.removeChild(element);
    } // if
} // removeElement
