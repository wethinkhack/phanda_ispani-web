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
  
//reference your database
var bizdatabase = firebase.database().ref("form");

document.getElementById("form").addEventListener("submit",submitForm);

function submitForm(e){
    e.preventDefault();

    var Name = getElementVal("Name");
    var Email = getElementVal("Email");
    var Password = getElementVal("Password");
    var Phone = getElementVal("Phone");
    saveMessages(Name, Email, Password, Phone);
     
}

const saveMessages = (Name,Email, Password, Phone) => {
    var newBizRegisterForm = bizdatabase.push();

    newBizRegisterForm.set({
        Name: Name,
        Email: Email,
        Password: Password,
        Phone: Phone,
    });


};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};


//create a user///////////////////////////////////////////////////////////////

//const auth = firebase.auth();
const database = firebase.database();

document.getElementById("form").addEventListener("submit", submitUser);

function submitUser(e) {
    e.preventDefault();
  
    var Name = getElementVal("Name");
    var Email = getElementVal("Email");
    var Password = getElementVal("Password");
    var Phone= getElementVal("Phone");
  
    // Create user with email and password
    auth.createUserWithEmailAndPassword(Email, Password)
      .then((userCredential) => {
        // Signed in 
        var user = userCredential.user;
        
        // Save user details to Firebase Database
        saveUserDetails(user.uid, Name,Email);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.error(errorMessage);
        // Handle error
      });
  }
  
  const saveUserDetails = (userId, Name, Email,Password) => {
    var userData = {
      Name: Name,
      Email: Email,
      Password: Password
    };
  
    // Save user details under 'users' node
    database.ref('users/' + userId).set(userData)
      .then(() => {
        console.log("User details saved successfully");
        // Optionally, you can redirect or show a success message
      })
      .catch((error) => {
        console.error("Error saving user details: ", error);
        // Handle error
      });
  };
  
