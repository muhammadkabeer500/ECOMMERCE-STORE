 
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";

 import { getAuth,
          createUserWithEmailAndPassword,
          signInWithEmailAndPassword,
          signOut,
          onAuthStateChanged, } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";




 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyAX6sNtT8M7WUZSTRmDpzF4Rs8T6a2ADt8",
   authDomain: "product-store-902ba.firebaseapp.com",
   projectId: "product-store-902ba",
   storageBucket: "product-store-902ba.appspot.com",
   messagingSenderId: "256639711795",
   appId: "1:256639711795:web:bbb811050659c1693dc146"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
  let auth  = getAuth(app);
 
export {auth,createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut,onAuthStateChanged};
