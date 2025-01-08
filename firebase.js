// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  browserLocalPersistence,
  getAuth,
  setPersistence,
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyACchtB33bNAoIYJw5l8g2_utEsVn4_mZU',
  authDomain: 'finanx-c0ca2.firebaseapp.com',
  projectId: 'finanx-c0ca2',
  storageBucket: 'finanx-c0ca2.firebasestorage.app',
  messagingSenderId: '147432216810',
  appId: '1:147432216810:web:9bbf592e87fa7e55e59f93',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };

setPersistence(auth, browserLocalPersistence);
