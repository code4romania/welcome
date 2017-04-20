import Firebase from 'firebase'
import 'whatwg-fetch'
// Set up Firebase
var config = {
  apiKey: 'AIzaSyDLt7lrJEkHhmEb-cy0yonb7jJDfAlr1WE',
  authDomain: 'welcome-1f483.firebaseapp.com',
  databaseURL: 'https://welcome-1f483.firebaseio.com',
  storageBucket: 'welcome-1f483.appspot.com',
  messagingSenderId: '17885379271',
  functionsURL: 'https://us-central1-welcome-1f483.cloudfunctions.net/'
}

Firebase.initializeApp(config)

export const FirebaseAuth = Firebase.auth()
export const FirebaseDb = Firebase.database()
export const FacebookProvider = new Firebase.auth.FacebookAuthProvider()
// FacebookProvider.addScope('email')
// FacebookProvider.addScope('profile')
export const GoogleProvider = new Firebase.auth.GoogleAuthProvider()
GoogleProvider.addScope('email')
GoogleProvider.addScope('profile')
export default Firebase

Firebase.fetch = (func, body) => new Promise((resolve, reject) => {
  fetch(config.functionsURL + func, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  }).then(res => res.ok
    ? res.json().then(json => resolve(json)).catch(() => resolve())
    : res.text().then(text => reject(new Error(text || 'Server error'))))
})
