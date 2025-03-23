// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0dBZmhoRRAlRsO_jD-fpu29cb1xWpkbY",
  authDomain: "my-job-portal-6e6df.firebaseapp.com",
  projectId: "my-job-portal-6e6df",
  storageBucket: "my-job-portal-6e6df.firebasestorage.app",
  messagingSenderId: "412199110477",
  appId: "1:412199110477:web:bb69b9eae50f113bd31904"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);