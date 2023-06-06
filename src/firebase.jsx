import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
 
	apiKey: "AIzaSyD3GFWONhH9PvV_DVGnWihGujeKZPXLXI8",
	authDomain: "facebook-clone-638ea.firebaseapp.com",
	projectId: "facebook-clone-638ea",
	storageBucket: "facebook-clone-638ea.appspot.com",
	messagingSenderId: "709712465149",
	appId: "1:709712465149:web:b9b3015f07515ba3960294",
	measurementId: "G-DGEK9FZNMJ"
 
});
const auth = firebase.auth();
const db = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;
