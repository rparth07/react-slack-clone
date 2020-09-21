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

// Firestore stuff
export const firestore = firebase.firestore();
window.firestore = firestore;

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
    const createdAt = new Date();
    try {
      await userRef.set({
        display_name: displayName, //|| additionalData.displayName,
        email,
        photo_url: photoURL
          ? photoURL
          : 'https://ca.slack-edge.com/T0188513NTW-U01867WD8GK-ga631e27835b-72',
        created_at: createdAt,
        //...additionalData,
      });
    } catch (error) {
      console.error('Error creating user', error.message);
    }
  }
  return getUserDocument(user.uid);
};

export const getUserDocument = async (uid) => {
  if (!uid) return null;

  try {
    const UserDocument = await firestore.collection('users').doc(uid);
    return UserDocument;
  } catch (error) {
    console.error('Error in fetching user', error.message);
  }
};
