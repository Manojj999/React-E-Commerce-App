import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyALhyvRCvCcqIt-CCmtbvvFMafl-zo5GN8",
  authDomain: "ecommerce-db-6ce3f.firebaseapp.com",
  databaseURL: "https://ecommerce-db-6ce3f.firebaseio.com",
  projectId: "ecommerce-db-6ce3f",
  storageBucket: "ecommerce-db-6ce3f.appspot.com",
  messagingSenderId: "837811872722",
  appId: "1:837811872722:web:fed6909e0458bb2ce89e0b",
  measurementId: "G-B5LH5XVM3Y",
};

firebase.initializeApp(config);
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
        ...additionalData,
      });
    } catch (error) {
      console.log("error from creating user ", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInwithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
