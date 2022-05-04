// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAsUkUKP9NxTL0VVNg0Pr56vrw_x1Humj8",
    authDomain: "bd-gadget-warehouse.firebaseapp.com",
    projectId: "bd-gadget-warehouse",
    storageBucket: "bd-gadget-warehouse.appspot.com",
    messagingSenderId: "333619335108",
    appId: "1:333619335108:web:6717ff467b65299d6ede91"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;