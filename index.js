//index: sign-up

//Sign Up Button
const SignUpButtonHandler = () =>{
  NameTextboxHandler();
  EmailTextboxHandler();
  PasswordsHandler();
  
  //checks if an element is blank if so sends an alert
  if (name == ""){
    alert("Please enter your name.");
  }
  if (email == ""){
    alert("Please enter your email.");   
  }
  if (password == ""){
    alert("Please enter a password.");   
  }
  //if all the if-statements above are false, the user is redirected to the Home Page
  if (!(name == "") && !(email == "") && !(password == "") && (emailTextboxInput.value.includes("@")) && (emailTextboxInput.value.length >= 3) && (passwordTextboxInput.value == password2TextboxInput.value)) {
    location.href = "home.html";
  }
}
const signUpButton = document.getElementById("signUpButton");
signUpButton.addEventListener("click", SignUpButtonHandler);

//Name
const NameTextboxHandler = () =>{
  //saves name globally
  name = document.getElementById("newNameInput").value;
  localStorage.setItem("localName", name);
}
const nameTextboxInput = document.getElementById("newNameInput");

//Email
const EmailTextboxHandler = () =>{
  //checks for valid email
  if((emailTextboxInput.value.includes("@")) && emailTextboxInput.value.length >= 3) {
    //saves email globally
    email = document.getElementById("newEmailInput").value;
    localStorage.setItem("localEmail", email);
  } else {
    alert("Please enter a valid email.");
  }
}
const emailTextboxInput = document.getElementById("newEmailInput");
 
//Password
const PasswordsHandler = () =>{
  //checks that passwords match
  if (passwordTextboxInput.value == password2TextboxInput.value){
    //saves password globally
   password = document.getElementById("newPasswordInput").value;
  localStorage.setItem("localPassword", password);
  } else {
    alert("Passwords do not match. Please try again.")
  }
}

//gets the passwords that the user inputs
const passwordTextboxInput = document.getElementById("newPasswordInput");
const password2TextboxInput = document.getElementById("newPassword2Input");

//makes the User Page accessibility input box show the correct prompt text
localStorage.setItem("localAccommodations", "Accommodations (ramp, lowriding vehical, animals, etc.)")