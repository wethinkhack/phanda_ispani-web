/*// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDMI6MED71-FeM57FLzx7p-Jc_83Q-bzCM",
    authDomain: "ayobaproconnect.firebaseapp.com",
    databaseURL: "https://ayobaproconnect-default-rtdb.firebaseio.com",
    projectId: "ayobaproconnect",
    storageBucket: "ayobaproconnect.appspot.com",
    messagingSenderId: "457982210991",
    appId: "1:457982210991:web:35858882b2b03e9267355a",
    measurementId: "G-B46J0446E2"
  };
  //initialize firebase
  firebase.initializeApp(firebaseConfig);
  */
  const auth = firebase.auth();
  
  const loginPopup = document.getElementById('login');
  
  function isValidEmail(Email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(Email);
}

  loginPopup.addEventListener('submit', (e) => {
  
    e.preventDefault();
  
    const Email = document.getElementById('signInEmail').value;
    const Password = document.getElementById('signInPassword').value;
  
/*
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
*/






    // Sign in with email and password
    auth.signInWithEmailAndPassword(Email, Password)
     .then((userCredential) => {
      // Signed in successfully
       const user = userCredential.user;
       console.log('User logged in:', user);
      // Redirect to another page or perform additional actions
      window.location.href = 'products.html';
    })
     .catch((error) => {
      // Handle errors here
       const errorCode = error.code;
       const errorMessage = error.message;
       console.error('Login error:', errorMessage);
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
  
  

  
  