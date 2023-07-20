import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAzDh6cIaaUpjbvb6tJPiBnNEcUBNcmEmw",
    authDomain: "disneyplus-clone-9aa23.firebaseapp.com",
    projectId: "disneyplus-clone-9aa23",
    storageBucket: "disneyplus-clone-9aa23.appspot.com",
    messagingSenderId: "153098378143",
    appId: "1:153098378143:web:2c58d6c505dce49c283baa",
    measurementId: "G-VM1KL7M360"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);
  const db = getFirestore(app);
  //const firebaseApp = firebase.initializeApp(firebaseConfig);
  //const db = app.firestore();
  //const auth = firebase.auth();
  //const provider = new firebase.auth.GoogleAuthProvider();
  //const storage = firebase.storage();

  export { auth };
  export default db;
