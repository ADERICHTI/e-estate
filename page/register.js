// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZuTmJ5rnarweJwkBDVIkDahmBb0_fXEo",
  authDomain: "arcstone-626.firebaseapp.com",
  projectId: "arcstone-626",
  storageBucket: "arcstone-626.firebasestorage.app",
  messagingSenderId: "1073178087340",
  appId: "1:1073178087340:web:e20187310804da38703409",
  measurementId: "G-FSW36FP2GC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

//Input Not Needed 
const confirmPassword = document.getElementById("signup-confirm").value;

//Google Button

const googlebtn = document.getElementById("google-sign-in-btn");

//Submit button

const submitButton = document.getElementById("signup-btn");
submitButton.addEventListener("click", function (event) {
  event.preventDefault();

  // Inputs

  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      alert("User registered successfully!");
      alert("Please login to continue.");
      window.location.reload();
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("Error: " + errorMessage);
      // ..
    });

})