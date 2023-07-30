
// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";
// import "firebase/compat/storage";




// const firebaseConfig = {
//   // Your Firebase config here
//   apiKey: "AIzaSyA3rUwvtUYLl4n78Ape3mgzgmadpIq6utA",
//   authDomain: "stratapic.firebaseapp.com",
//   projectId: "stratapic",
//   storageBucket: "stratapic.appspot.com",
//   messagingSenderId: "860107558566",
//   appId: "1:860107558566:web:f8fdd1e11872fc360c6e67",
//   measurementId: "G-8NWH5G87KF"
// };

// firebase.initializeApp(firebaseConfig);

// const storage = firebase.storage();
// const db = firebase.firestore();
// const auth = firebase.auth();


// export { db, auth, storage, firebase };













import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB4m83VLNUSnriVuwaZkSgo9y_8XAsH8AQ",
  authDomain: "instagram-clone-cb70a.firebaseapp.com",
  projectId: "instagram-clone-cb70a",
  storageBucket: "instagram-clone-cb70a.appspot.com",
  messagingSenderId: "44528170325",
  appId: "1:44528170325:web:70b7e29d5ee4c7798aabdc",
  measurementId: "G-J4FYENR1SN",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db, auth & storage
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { auth, db, storage, firebaseApp };
