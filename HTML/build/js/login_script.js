function validateForm () {
  var username = document.getElementById ("username");
  var password = document.getElementById ("password");
//check for rules
  if (username.value=="davidux"
      && password.value=="@ccessibil1tY") {
    alert ("Success!");
  } else {
    alert("Your user name or password is incorrect!");
  }
 return false;
}
window.validateForm = validateForm
