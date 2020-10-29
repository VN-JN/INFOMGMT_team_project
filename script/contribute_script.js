function submit_email(email) {
	
  var element = document.getElementById('sort');
  if (emailIsValid(email) == true){
	  var confirm_email = confirm("Would you like to subscribe with \"" + email + "\"?");
	  if (confirm_email != null) alert("Thank you for subscribing")
  }
  else if (email == "") alert("Please enter your email!")
  else alert("Your email is not valid")
}

function emailIsValid (email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}