import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
	apiKey: "AIzaSyD_OzNNudfC0CoOrzDmj2aIPGgISrJW_Ug",
	authDomain: "clothing-store-crwd.firebaseapp.com",
	projectId: "clothing-store-crwd",
	storageBucket: "clothing-store-crwd.appspot.com",
	messagingSenderId: "394768171889",
	appId: "1:394768171889:web:b721eb08877783a1b12cd0",
	measurementId: "G-RFWFH6XNR2",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
