import { initializeApp } from "firebase/app";
import  {getAuth} from "firebase/auth";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
    apiKey: "AIzaSyDjnQdqC5rDPsaRW7hTny9XeIRdOTAcwZI",
    authDomain: "social-network-b71e6.firebaseapp.com",
    projectId: "social-network-b71e6",
    storageBucket: "social-network-b71e6.appspot.com",
    messagingSenderId: "886646354074",
    appId: "1:886646354074:web:baf97bca115fe713b16f23"
  };
   
  
   const app = initializeApp(firebaseConfig);
   const auth = getAuth(app)
  

   export   { auth }