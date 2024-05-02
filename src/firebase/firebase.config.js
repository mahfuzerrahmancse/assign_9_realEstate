// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxZwgCqPR7g7Qftktn5D4hJrsmWUatTUY",
  authDomain: "assign9-mail-pwd.firebaseapp.com",
  projectId: "assign9-mail-pwd",
  storageBucket: "assign9-mail-pwd.appspot.com",
  messagingSenderId: "650321173863",
  appId: "1:650321173863:web:55c7b18f27c6419cb923c2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
