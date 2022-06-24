import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCaSWbOA73pxHUxnApihmc8vnTF87IEyps",
  authDomain: "gb-react-f1de3.firebaseapp.com",
  databaseURL: "https://gb-react-f1de3-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "gb-react-f1de3",
  storageBucket: "gb-react-f1de3.appspot.com",
  messagingSenderId: "1093996840197",
  appId: "1:1093996840197:web:2b4c06ccb720907d9f236c"
};


export const firebase = initializeApp(firebaseConfig);

export const analytics = getAnalytics(firebase);
export const auth = getAuth(firebase);
export const database = getDatabase(firebase);
