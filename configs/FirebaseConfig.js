// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2EwF1yQKsWavDkF4soz4gGpq5d9_p3FU",
  authDomain: "navermeg-b32cf.firebaseapp.com",
  projectId: "navermeg-b32cf",
  storageBucket: "navermeg-b32cf.appspot.com",
  messagingSenderId: "1009847435344",
  appId: "1:1009847435344:web:52dcc76418dcec833a9155",
  measurementId: "G-V7FL2M80QS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)
// const analytics = getAnalytics(app);