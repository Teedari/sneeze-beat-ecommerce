import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyBXUbMq-x_Rx99fxZ1qboJVQEKDnTR337g",
  authDomain: "sneeze-beat.firebaseapp.com",
  projectId: "sneeze-beat",
  storageBucket: "sneeze-beat.appspot.com",
  messagingSenderId: "833448876972",
  appId: "1:833448876972:web:31b20c27f8aa4fe174f809"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)
const bucket = getStorage(app)

// Action Code Settings
const actionCodeSettings = email => ({
  url: 'http://localhost:3000/dashboard/?email=' + email,
  handleCodeInApp: true,
  // When multiple custom dynamic link domains are defined, specify which
  // one to use.
  // dynamicLinkDomain: "example.page.link"
});




export {auth, db, bucket, actionCodeSettings}