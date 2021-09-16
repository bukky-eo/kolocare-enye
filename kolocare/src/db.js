import firebase from 'firebase/app'
import 'firebase/firestore'

// Get a Firestore instance
// .initializeApp({ projectId: 'MY PROJECT ID' })
export const db = firebase
  .initializeApp({
    apiKey: "AIzaSyDpUDesueeXwtbWwkeOucPhLGeBPYd8xAM",
    authDomain: "kolocare-249ee.firebaseapp.com",
    projectId: "kolocare-249ee",
    storageBucket: "kolocare-249ee.appspot.com",
    messagingSenderId: "208056712562",
    appId: "1:208056712562:web:e9a66783d22206f264f1eb",
    measurementId: "G-78V6RCYH8T"
  })
  .firestore()


  

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { Timestamp, GeoPoint } = firebase.firestore
export { Timestamp, GeoPoint }

// if using Firebase JS SDK < 5.8.0
db.settings({ timestampsInSnapshots: true })

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDpUDesueeXwtbWwkeOucPhLGeBPYd8xAM",
//   authDomain: "kolocare-249ee.firebaseapp.com",
//   projectId: "kolocare-249ee",
//   storageBucket: "kolocare-249ee.appspot.com",
//   messagingSenderId: "208056712562",
//   appId: "1:208056712562:web:e9a66783d22206f264f1eb",
//   measurementId: "G-78V6RCYH8T"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);