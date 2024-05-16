import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// import { createUserWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD1EXDuZ4IK9Uy5m_YloGnN0l0ve1IwVVU",
  authDomain: "netflix-clone-614b7.firebaseapp.com",
  projectId: "netflix-clone-614b7",
  storageBucket: "netflix-clone-614b7.appspot.com",
  messagingSenderId: "478888644322",
  appId: "1:478888644322:web:6d36bb94a73ef833fa98bb"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { firebaseApp };
export { auth };
export default db;