//This function
function submit_email(email) {
  //When the email is valid
  if (emailIsValid(email) == true){
	  //Ask user to confirm subscription
	  var confirm_email = confirm("Would you like to subscribe with \"" + email + "\"?");
	  //When user confirmed
	  if (confirm_email != null) alert("Thank you for subscribing")
  }
  //When user did not enter any input
  else if (email == "") alert("Please enter your email!")
  //When email is not valid
  else alert("Your email is not valid")
}

//This function checks validation of email
function emailIsValid (email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}