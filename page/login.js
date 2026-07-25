// Import the functions you need from the SDKs you need
import { getAuth } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-analytics.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";
import { sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";
import { GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";
import { signInWithPopup } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";


// Your web app's Firebase configuration
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
const provider = new GoogleAuthProvider();
auth.languageCode = 'en';

// Submit button logic
const submitButton = document.getElementById("login-btn");
submitButton.addEventListener("click", function (event) {
  event.preventDefault();

  const emailValue = document.getElementById("login-email").value;
  const passwordValue = document.getElementById("login-password").value;

  signInWithEmailAndPassword(auth, emailValue, passwordValue)
    .then((userCredential) => {
      window.location.href = "loading.html";
    })
    .catch((error) => {
      alert("Error: " + error.message);
    });
});
// Google sign-in button 
const googleBtn = document.getElementById("google-sign-in-btn");
googleBtn.addEventListener("click", function (event) {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);

      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      console.log("User signed in with Google:", user);
      window.location.href = "loading.html";
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
})

// Forgot password button logic
const forgotButton = document.getElementById("forgot");
forgotButton.addEventListener("click", function () {
  alert("Please enter your email address in the input field first.");
});

let forgotPassword = (e) => {
  e.preventDefault();

  // 1. Target the correct email input element ID ("login-email")
  const emailInput = document.getElementById("login-email");

  // 2. Extract and trim the string value safely
  const emailValue = emailInput ? emailInput.value.trim() : "";

  // 3. Prevent hitting Firebase if the field is empty
  if (!emailValue) {
    alert("Please enter your email address in the input field first.");
    return;
  }

  // 4. Pass the string text value, along with your existing 'auth' reference
  sendPasswordResetEmail(auth, emailValue)
    .then(() => {
      alert("Password reset email sent! Check your inbox.");
      window.location.reload();
    })
    .catch((error) => {
      alert("Error: " + error.message);
      console.log("Error Code:", error.code);
    });
};

forgotButton.addEventListener("click", forgotPassword);

