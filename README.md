# password-generator

### // Assignment Code
var generateBtn = document.querySelector("#generate");
graping ID generate for the button 

### // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
the code have butten to generate basswor and have a method of eventListener for a "click"


### // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  where the password will generate
