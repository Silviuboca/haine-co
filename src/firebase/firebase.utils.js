import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAoKNNQpGJMmSxo1nq3dtOE_70as3nXkQA',
  authDomain: 'haine-db.firebaseapp.com',
  databaseURL: 'https://haine-db.firebaseio.com',
  projectId: 'haine-db',
  storageBucket: 'haine-db.appspot.com',
  messagingSenderId: '1035428579411',
  appId: '1:1035428579411:web:966408a07e62f98a2b1ea6',
  measurementId: 'G-C0HCVS68JE',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        additionalData,
      });
    } catch (err) {
      console.log('error creating user', err.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;