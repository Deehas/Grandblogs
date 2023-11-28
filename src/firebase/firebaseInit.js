import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBWUpXw7SADdnjjHeYnWBlnyntyom1fbDA",
  authDomain: "grandblogsyt.firebaseapp.com",
  projectId: "grandblogsyt",
  storageBucket: "grandblogsyt.appspot.com",
  messagingSenderId: "855072341978",
  appId: "1:855072341978:web:825d5f0128dcbc79080ae3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();
