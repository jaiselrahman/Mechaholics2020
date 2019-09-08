import firebaseConfig from './firebaseConfig'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

firebase.initializeApp(firebaseConfig);
firebase.firestore().enablePersistence()
    .catch(function (err) {
        console.log(err);
    });
export default firebase