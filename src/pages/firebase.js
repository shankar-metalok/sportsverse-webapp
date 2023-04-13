import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: process.env.NEXT_API_KEY,
    authDomain: process.env.NEXT_AUTH_DOMAIN,
    projectId: process.env.NEXT_PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.NEXT_APP_ID
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)