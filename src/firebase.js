import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBYMEtX8kg5WjEAUf4caGlfgEsm1HhEKDc',
  authDomain: 'clone-12003.firebaseapp.com',
  projectId: 'clone-12003',
  storageBucket: 'clone-12003.appspot.com',
  messagingSenderId: '161460532078',
  appId: '1:161460532078:web:8ee2c15bf8b4c519c1877f',
  measurementId: 'G-VT6KFEC2Y4',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }
