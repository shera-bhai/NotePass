import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCYo_mcn3KYyVqx1RtZfWGz3SmF7su1uW4",
    authDomain: "passmybook-a8b8d.firebaseapp.com",
    projectId: "passmybook-a8b8d",
    storageBucket: "passmybook-a8b8d.appspot.com",
    messagingSenderId: "955823565433",
    appId: "1:955823565433:web:c379aab216c9d3107ac2a8",
    measurementId: "G-V4L5JE4C70"
};

const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export default app;