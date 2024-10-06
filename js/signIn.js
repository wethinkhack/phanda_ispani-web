
import {secrteAPI as firebaseConfig} from "secrteAPI.js";
const { default: firebase } = require("firebase/compat/app");

 

  //initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  const auth = firebase.auth();
  
  const loginPopup = document.getElementById('login');
  
  function _isValidEmail(Email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(Email);
  }

  loginPopup.addEventListener('submit', (e) => {
  
    e.preventDefault();
  
    const Email = document.getElementById('signInEmail').value;
    const Password = document.getElementById('signInPassword').value;
  

    if (!Email || !Password) {
        console.error('Email and Password are required.');
        return;
    }

    if (!isValidEmail(Email)) {
        console.error('Invalid email format.');
        const errorMessageElement = document.getElementById('error-message');
        if (errorMessageElement) {
            errorMessageElement.textContent = 'Invalid email format.';
        }
        return;
    }







    // Sign in with email and password
    auth.signInWithEmailAndPassword(Email, Password)
     .then((userCredential) => {
      // Signed in successfully
       const user = userCredential.user;
       console.log('User logged in:', user);
      // Redirect to another page or perform additional actions
      window.location.href = 'profile.html';
    })
     .catch((error) => {
      // Handle errors here
       const errorCode = error.code;
       const errorMessage = error.message;
       console.error('Login error:', errorCode, errorMessage);
      // Display error message to the user
    });
  });
  
  
  // Check if user is already logged in
  firebase.auth().onAuthStateChanged((user) => {
   if (user) {
      // User is signed in
      console.log('User is logged in:', user);
      //window.location.href='products.html';
      // Redirect or perform actions for logged in user
    } else {
      // User is signed out
        console.log('User is logged out');
      // Show login form or perform actions for logged out user
    }
  });




  
  

  
  