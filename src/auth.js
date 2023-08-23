// Import the functions you need from the SDKs you need
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCv9vwuWsJkmZol11pDs9KP2I6rNXRfRtA",
  authDomain: "fir-auth-62573.firebaseapp.com",
  projectId: "fir-auth-62573",
  storageBucket: "fir-auth-62573.appspot.com",
  messagingSenderId: "482158133819",
  appId: "1:482158133819:web:6967c5d5b3edb72ae1d21e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export const register = async (email, password) => {
  try {
    const { user } = await createUserWithEmailAndPassword(auth, email, password)
    return user
  } catch (error) {
    console.log(error)
  }
}

export const login = async (email, password) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password)
    console.log("LOG IN ", user)
    return user

  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
  }
}



export { auth };