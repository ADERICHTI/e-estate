 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-analytics.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";
  import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";
  import { signOut } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";
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
  const user = auth.currentUser;

  //User upadate

  onAuthStateChanged(auth, (user) => {

    console.log("User state changed:", user);
    if (user) {

        updateUserProfile(user);  

        const uid = user.uid;
        return uid;

    }else {
        window.location.href = "index.html";
    }
  })

  // 1. REMOVED the global "const user = auth.currentUser;" line entirely.

function updateUserProfile(user) { // 2. Pass the fresh user data into the function
  const userName = user.displayName; 
  const userEmail = user.email;
  const userAvatar = user.photoURL; // Only useful if using an <img> tag later
  
  console.log("User Name:", userName, "User Email:", userEmail);  

  // 3. Update text content
  const nameLabel = document.getElementById("userNameLabel");
  const emailLabel = document.getElementById("userEmailLabel");
  const avatarImage = document.getElementById("userAvatarImage");
  
  if (nameLabel) nameLabel.textContent = userName;
  if (emailLabel) emailLabel.textContent = userEmail;
  if (avatarImage && userAvatar) avatarImage.src = userAvatar; // Only if using an <img> tag

  // 4. FIX: If your element is an <i> icon tag, swap classes instead of using .src
  const avatarIcon = document.getElementById("userAvatarIcon");
  if (avatarIcon && userAvatar) {
    // If you actually have a custom photoURL image URL, you'd swap out the <i> tag for an <img> tag.
    // Otherwise, if sticking to standard icons, you modify the classList:
    // avatarIcon.className = "fas fa-user-astronaut"; 
  }
}

//logout function

function handleLogout() {
    signOut(auth)
    .then(() => {
      // You don't necessarily need redirect logic here because your 
      // onAuthStateChanged listener will handle it automatically!
      console.log("User successfully signed out globally.");
    })
    .catch((error) => {
      console.error("Error signing out: ", error.message);
      alert("Failed to log out. Please try again.");
    });
}

const logoutButton = document.getElementById("authActionButton");

if (logoutButton) {
  // Now handleLogout is defined and can be passed as a reference
  logoutButton.addEventListener("click", handleLogout);
}