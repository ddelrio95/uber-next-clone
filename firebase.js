import { initializeApp } from 'firebase/app'
import { GoogleAuthProvider, getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyAf4I1iuko3t1WsLSMZTWc1ztkz3yGGLhg',
    authDomain: 'uber-next-clone-c7623.firebaseapp.com',
    projectId: 'uber-next-clone-c7623',
    storageBucket: 'uber-next-clone-c7623.appspot.com',
    messagingSenderId: '436173406828',
    appId: '1:436173406828:web:7c28ae3c1e9622ee7a0e49',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const provider = new GoogleAuthProvider()
const auth = getAuth()

export { app, provider, auth }