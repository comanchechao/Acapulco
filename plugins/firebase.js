import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyC77kzTcPi7rJsGKgmH0j62YYj1PUX_uWE',
  authDomain: 'acapulco-e86b9.firebaseapp.com',
  projectId: 'acapulco-e86b9',
  storageBucket: 'acapulco-e86b9.appspot.com',
  messagingSenderId: '652596111912',
  appId: '1:652596111912:web:a64d3ae42f255f2944a31d',
  measurementId: 'G-15G0W8Q4G2',
}
// Initialize Firebase
export const auth = firebase.apps.length
  ? firebase.app()
  : firebase.initializeApp(firebaseConfig)
