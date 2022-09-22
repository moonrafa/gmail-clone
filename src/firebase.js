import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyC4YB-0XRYMNCztXwaThb9k5TYXZzL_OAc',
  authDomain: 'rafamail-6b7c7.firebaseapp.com',
  projectId: 'rafamail-6b7c7',
  storageBucket: 'rafamail-6b7c7.appspot.com',
  messagingSenderId: '4291163203',
  appId: '1:4291163203:web:4968e6f8700f16986fd0f6'
}
firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const auth = firebase.auth()
const timestamp = firebase.firestore.FieldValue.serverTimestamp
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, timestamp, provider }
