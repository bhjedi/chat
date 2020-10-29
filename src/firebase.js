import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB_su5UwOK3l4w7Pde6kME0_35fWbB0AQU",
    authDomain: "chatt-bbba8.firebaseapp.com",
    databaseURL: "https://chatt-bbba8.firebaseio.com",
    projectId: "chatt-bbba8",
    storageBucket: "chatt-bbba8.appspot.com",
    messagingSenderId: "378464544003",
    appId: "1:378464544003:web:b4723d6de248601bf7b536",
    measurementId: "G-W3LBHG1BQE"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;
