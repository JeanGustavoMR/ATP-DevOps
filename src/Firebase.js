import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import 'firebase/firebase-auth';

const firebaseConfig = {
    apiKey: "AIzaSyAEglQmU-x4WIwuj2x6QSXoN2NXM0VCeSw",
    authDomain: "banco-ead-atp.firebaseapp.com",
    projectId: "banco-ead-atp",
    storageBucket: "banco-ead-atp.appspot.com",
    messagingSenderId: "618642995263",
    appId: "1:618642995263:web:8ed98c2a0fda720c9ca08a",
    measurementId: "G-72JYHWMK1M"
  };

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}
export default firebase;