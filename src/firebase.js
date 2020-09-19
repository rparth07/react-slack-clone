import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCDFbE522PSiO0Aq0UmISIEEev-pElzass',
  authDomain: 'reack-slack-clone.firebaseapp.com',
  databaseURL: 'https://reack-slack-clone.firebaseio.com',
  projectId: 'reack-slack-clone',
  storageBucket: 'reack-slack-clone.appspot.com',
  messagingSenderId: '137350764942',
  appId: '1:137350764942:web:23d1114821d6adc9aa6cdf',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {
  auth.signInWithPopup(googleProvider);
};
