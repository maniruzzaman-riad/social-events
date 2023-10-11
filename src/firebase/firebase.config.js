// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbeUrnyCMfKcBR-TZijLtIQx2_AOpIDQc",
  authDomain: "social-events-9th-assignment.firebaseapp.com",
  projectId: "social-events-9th-assignment",
  storageBucket: "social-events-9th-assignment.appspot.com",
  messagingSenderId: "728614712778",
  appId: "1:728614712778:web:262722a36b245751fdcb33"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;