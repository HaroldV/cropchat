import firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyC-gTtZ3WKL-VsvVfvTLu14M07U3HvTqGE',
  authDomain: 'cropchat-d6c27.firebaseapp.com',
  databaseURL: 'https://cropchat-d6c27.firebaseio.com',
  projectId: 'cropchat-d6c27',
  storageBucket: 'cropchat-d6c27.appspot.com',
  messagingSenderId: '571689897069'
}

export default firebase.initializeApp(config)
const storage = firebase.storage()
const database = firebase.database()

export { database, storage }
