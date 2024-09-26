// Your web app's Firebase configuration
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
  
  const auth = firebase.auth();
  
  // Assuming 'logoutButton' is an HTML element with id 'logoutButton'
  const logoutButton = document.getElementById('logoutButton');
  
  // Add event listener to the logout button
  logoutButton.addEventListener('click', () => {
    // Sign out the user
    firebase.auth().signOut().then(() => {
      console.log('User signed out.');
      // Redirect to your desired location after logout
      window.location.href = 'index.html';
    }).catch((error) => {
      console.error('Error signing out:', error);
    });
  });
  

