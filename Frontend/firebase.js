import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDSbKw-aW1-z6Jt4AWqyMsc67KrxDUrRM0",
  authDomain: "siscolab-d5e58.firebaseapp.com",
  projectId: "siscolab-d5e58",
  storageBucket: "siscolab-d5e58.firebasestorage.app",
  messagingSenderId: "180433523812",
  appId: "1:180433523812:web:1eda6c89dd72116aa1bb71"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export {
  auth,
  provider,
  signInWithPopup
};