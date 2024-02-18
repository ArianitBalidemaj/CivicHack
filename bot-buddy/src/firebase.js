// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABf-AtEkIzMN_c64LeuKLxOpYQ0PNmb6A",
  authDomain: "buddybot21.firebaseapp.com",
  projectId: "buddybot21",
  storageBucket: "buddybot21.appspot.com",
  messagingSenderId: "602010347127",
  appId: "1:602010347127:web:52f2bfe03056c1b0cb4872",
  measurementId: "G-72LEMBRST0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, auth }