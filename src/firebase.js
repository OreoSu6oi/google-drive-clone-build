import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDAE666L4RwhuzI-HA8Pf-Zt17v8FYadtE",
    authDomain: "drive-clone-26566.firebaseapp.com",
    projectId: "drive-clone-26566",
    storageBucket: "drive-clone-26566.firebasestorage.app",
    messagingSenderId: "493428569870",
    appId: "1:493428569870:web:cd6ef588c13820caf8095f"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const storage = getStorage(app);
const db = getFirestore(app);

export { storage, db };