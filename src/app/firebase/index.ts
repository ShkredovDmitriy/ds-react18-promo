import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';

// TODO: Replace the following with your app's Firebase project configuration

const firebaseConfig = {
  apiKey: "AIzaSyABEsbUYF8Arigxf5QfwX4Hq2NPGre71uY",
  authDomain: "ds-react-promo.firebaseapp.com",
  projectId: "ds-react-promo",
  storageBucket: "ds-react-promo.appspot.com",
  messagingSenderId: "493774537891",
  appId: "1:493774537891:web:ef6f2dbce842f177a6ab16"
}

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app);

export { auth, db }