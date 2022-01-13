import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCU1pSNDeR92TrxZOzkVpfpqO2_4lWP-70",
    authDomain: "tarefas-8f9e1.firebaseapp.com",
    projectId: "tarefas-8f9e1",
    storageBucket: "tarefas-8f9e1.appspot.com",
    messagingSenderId: "401123428580",
    appId: "1:401123428580:web:33ac332509c76cfe4044f1"
};

if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
    }

export default firebase;

