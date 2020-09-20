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
export const firestore = firebase.firestore();
export const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {
  auth.signInWithPopup(googleProvider);
};

export const signOut = () => {
  auth.signOut();
};

export const createOrGetUserProfileDocument = async (user) => {
  if (!user) return;
  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email, photoURL } = user;
    try {
      const user = {
        displayName: displayName,
        email,
        photo_Url: photoURL,
        created_at: new Date(user),
      };
      await userRef.set(user);
    } catch (error) {
      console.log('Error', error);
    }
  }
  return getUserDocument(user.uid);
};
async function getUserDocument(uid) {
  if (!uid) return null;
  try {
    const getUserDocument = await firestore.collection('user').doc(uid);
    return getUserDocument;
  } catch (error) {
    console.error('Error in getUserDocument', error.message);
  }
}
