const heroEmail = document.querySelector(".hero__email");
const registerEmail = document.querySelector(".register__email");

// Event listeners
heroEmail.addEventListener("focusout", checkEmail);
registerEmail.addEventListener("focusout", checkEmail);

/*
  Check if email is valid, if not add class & show error message
*/
function checkEmail(e){
  
  const email = e.target;
  const errorMessage = e.target.parentNode.querySelector('span');
  console.log(errorMessage);
  console.log(email.value.length == 0);
  const isValid = validateEmail(email.value);
  if(!isValid && email.value.length > 0){
    email.classList.add("email--error");
    errorMessage.classList.add('error--visible');
  } else {
    email.classList.remove("email--error");
    errorMessage.classList.remove("error--visible");
  }
}

/* 
  Validate email & return boolean
*/
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
